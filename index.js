'use strict';

function DotJSON(seperator, override) {
  if (typeof seperator === 'undefined') { seperator = '.'; }
  if (typeof override === 'undefined') { override = false; }
  this.seperator = seperator;
  this.override = override;
}

DotJSON.prototype._fill = function (a, obj, v, mod) {
  var k = a.shift();

  if (a.length > 0) {
    obj[k] = obj[k] || {};

    if (obj[k] !== Object(obj[k])) {
      if (this.override) {
        obj[k] = {};
      } else {
        throw new Error('Trying to redefine \'' + k + '\' which is a ' + typeof obj[k]);
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

DotJSON.prototype.process = function (v, mod) {
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

DotJSON.prototype.object = function (obj, mods) {
  var self = this;

  Object.keys(obj).forEach(function (k, i) {
    var mod = mods === undefined ? null : mods[k];

    if (k.indexOf(self.seperator) !== -1) {
      self._fill(k.split(self.seperator), obj, obj[k], mod);
      delete obj[k];
    } else if (self.override) {
      obj[k] = self.process(obj[k], mod);
    }
  });
};

DotJSON.prototype.str = function (str, v, obj, mod) {
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
DotJSON.prototype.pick = function (path, obj, remove) {
  var i, keys, val;

  if (path.indexOf(this.seperator) !== -1) {
    keys = path.split(this.seperator);
    for (i = 0; i < keys.length; i++) {
      if(obj.hasOwnProperty(keys[i])) {
        if(i === (keys.length - 1)) {
          if(remove) {
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
    if(remove) {
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
 *
 */
DotJSON.prototype.move = function (source, target, obj) {

  this.set(target, this.pick(source, obj, true), obj);

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
 * @param {Object} obj
 *
 */
DotJSON.prototype.transfer = function (source, target, obj1, obj2) {

  this.set(target, this.pick(source, obj1, true), obj2);

  return obj2;

};

/**
 *
 * Set a property on an object using dot notation.
 *
 */
DotJSON.prototype.set = function (path, val, obj) {
  var i, keys;

  // Do not operate if the value is undefined.
  if(typeof val === 'undefined') return obj;

  if (path.indexOf(this.seperator) !== -1) {
    keys = path.split(this.seperator);
    for (i = 0; i < keys.length; i++) {
      if(i === (keys.length - 1)) {
        obj[keys[i]] = val;
      } else if(
        // force the value to be an object
        !obj.hasOwnProperty(keys[i]) ||
        Object.prototype.toString.call(obj[keys[i]]) !== '[object Object]') {
        obj[keys[i]] = {};
      }
      obj = obj[keys[i]];
    }
    return obj;
  } else {
    obj[path] = val;
    return obj;
  }
};

module.exports = DotJSON;
