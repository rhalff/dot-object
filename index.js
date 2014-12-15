'use strict';

function DotObject(seperator, override) {

  if (!(this instanceof DotObject)) {
    return new DotObject(seperator, override);
  }

  if (typeof seperator === 'undefined') { seperator = '.'; }
  if (typeof override === 'undefined') { override = false; }
  this.seperator = seperator;
  this.override = override;
}

DotObject.prototype._fill = function(a, obj, v, mod) {
  var k = a.shift();

  if (a.length > 0) {
    obj[k] = obj[k] || {};

    if (obj[k] !== Object(obj[k])) {
      if (this.override) {
        obj[k] = {};
      } else {
        throw new Error(
          'Trying to redefine `' + k + '` which is a ' + typeof obj[k]
        );
      }
    }

    this._fill(a, obj[k], v, mod);
  } else {
    if (obj[k] === Object(obj[k]) && Object.keys(obj[k]).length) {
      throw new Error('Trying to redefine non-empty obj[\'' + k + '\']');
    }

    obj[k] = this.process(v, mod);
  }
};

DotObject.prototype.process = function(v, mod) {
  var i;

  if (typeof mod === 'function') {
    v = mod(v);
  } else if (mod instanceof Array) {
    for (i = 0; i < mod.length; i++) {
      v = mod[i](v);
    }
  }

  return v;
};

DotObject.prototype.object = function(obj, mods) {
  var self = this;

  Object.keys(obj).forEach(function(k) {
    var mod = mods === undefined ? null : mods[k];

    if (k.indexOf(self.seperator) !== -1) {
      self._fill(k.split(self.seperator), obj, obj[k], mod);
      delete obj[k];
    } else if (self.override) {
      obj[k] = self.process(obj[k], mod);
    }
  });
};

/**
 *
 * @param {String} str
 * @param {String} v
 * @param {Object} obj
 * @param {Function|Array} mod
 *
 */
DotObject.prototype.str = function(str, v, obj, mod) {
  if (str.indexOf(this.seperator) !== -1) {
    this._fill(str.split(this.seperator), obj, v, mod);
  } else if (this.override) {
    obj[str] = this.process(v, mod);
  }
};

/**
 *
 * Pick a value from an object using dot notation.
 *
 * Optionally remove the value
 *
 * @param {String} path
 * @param {Object} obj
 * @param {Boolean} remove
 */
DotObject.prototype.pick = function(path, obj, remove) {
  var i;
  var keys;
  var val;

  if (path.indexOf(this.seperator) !== -1) {
    keys = path.split(this.seperator);
    for (i = 0; i < keys.length; i++) {
      if (obj.hasOwnProperty(keys[i])) {
        if (i === (keys.length - 1)) {
          if (remove) {
            val = obj[keys[i]];
            delete obj[keys[i]];
            return val;
          } else {
            return obj[keys[i]];
          }
        } else {
          obj = obj[keys[i]];
        }
      } else {
        return undefined;
      }
    }
    return obj;
  } else {
    if (remove) {
      val = obj[path];
      delete obj[path];
      return val;
    } else {
      return obj[path];
    }
  }
};

/**
 *
 * Move a property from one place to the other.
 *
 * If the source path does not exist (undefined)
 * the target property will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj
 * @param {Boolean} merge
 *
 */
DotObject.prototype.move = function(source, target, obj, merge) {

  this.set(target, this.pick(source, obj, true), obj, merge);

  return obj;

};

/**
 *
 * Transfer a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Boolean} merge
 */
DotObject.prototype.transfer = function(source, target, obj1, obj2, merge) {

  this.set(target, this.pick(source, obj1, true), obj2, merge);

  return obj2;

};

/**
 *
 * Copy a property from one object to another object.
 *
 * If the source path does not exist (undefined)
 * the property on the other object will not be set.
 *
 * @param {String} source
 * @param {String} target
 * @param {Object} obj1
 * @param {Object} obj2
 * @param {Boolean} merge
 */
DotObject.prototype.copy = function(source, target, obj1, obj2, merge) {

  this.set(target, this.pick(source, obj1, false), obj2, merge);

  return obj2;

};

function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 *
 * Set a property on an object using dot notation.
 *
 * @param {String} path
 * @param {Mixed} val
 * @param {Object} obj
 * @param {Boolean} merge
 */
DotObject.prototype.set = function(path, val, obj, merge) {
  var i;
  var k;
  var keys;

  // Do not operate if the value is undefined.
  if (typeof val === 'undefined') {
    return obj;
  }

  if (path.indexOf(this.seperator) !== -1) {
    keys = path.split(this.seperator);
    for (i = 0; i < keys.length; i++) {
      if (i === (keys.length - 1)) {
        if (merge && isObject(val) && isObject(obj[keys[i]])) {
          for (k in val) {
            if (val.hasOwnProperty(k)) {
              obj[keys[i]][k] = val[k];
            }
          }

        } else if (Array.isArray(obj[keys[i]]) && Array.isArray(val)) {
          for (var j = 0; j < val.length; j++) {
            obj[keys[i]].push(val[j]);
          }
        } else {
          obj[keys[i]] = val;
        }
      } else if (
        // force the value to be an object
        !obj.hasOwnProperty(keys[i]) ||
        !isObject(obj[keys[i]])) {
        obj[keys[i]] = {};
      }
      obj = obj[keys[i]];
    }
    return obj;
  } else {
    if (merge && isObject(val)) {
      for (k in val) {
        if (val.hasOwnProperty(k)) {
          obj[path][k] = val[k];
        }
      }
    } else if (Array.isArray(obj[path]) && Array.isArray(val)) {
      obj[path].push(val);
    } else {
      obj[path] = val;
    }
    return obj;
  }
};

module.exports = DotObject;
