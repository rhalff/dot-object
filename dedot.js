var Util = require("util"),
    Stream = require("stream");

var DeDot = {};

DeDot.override = false;

DeDot._fill = function (a, obj, v, mod) {

  var k = a.shift(), i;

  if (a.length > 0) {

    obj[k] = obj[k] || {};

    if (obj[k] !== Object(obj[k])) {
      if (DeDot.override) {
        obj[k] = {};
      } else {
        throw new Error("Trying to redefine '" + k + "' which is a " + typeof obj[k]);
      }
    }

    DeDot._fill(a, obj[k], v, mod);

  } else {

    // TODO: make sure this is ever used
    if (obj[k] === Object(obj[k]) && Object.keys(obj[k]).length) {
      throw new Error("Trying to redefine non-empty obj['" + k + "']");
    }

    obj[k] = DeDot.process(v, mod);

  }
};

DeDot.process = function (v, mod) {

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

DeDot.object = function (obj, mods) {

  Object.keys(obj).forEach(function (k, i) {

    var mod = mods === undefined ? null : mods[k];
    if (k.indexOf('.') !== -1) {
      DeDot._fill(k.split('.'), obj, obj[k], mod);
      delete obj[k];
    } else if(DeDot.override) {
      obj[k] = DeDot.process(obj[k], mod);
    }

  });
};

DeDot.str = function (str, v, obj, mod) {

  if (str.indexOf('.') !== -1) {
    DeDot._fill(str.split('.'), obj, v, mod);
  } else if (DeDot.override) {
    obj[str] = DeDot.process(v, mod);
  }

};

/**
 * Use DeDot as a stream converter.
 */
DeDot.Stream = function (opts) {
  this.mods = opts.mods ? opts.mods : [];
  this.readable = true;
  this.writable = true;
};

Util.inherits(DeDot.Stream, Stream);

/**
 * Handle various params and upper-case string data.
 *
 * Signature can be in format of:
 *  - string, [encoding]
 *  - buffer
 *
 * Our example implementation hacks the data into a simpler
 # (string) form -- real implementations would need more.
 */
DeDot.Stream.prototype._transform = function (row) {

  DeDot.object(row, this.mods);

  this.emit("data", row);
};

/**
 * Stream write (override).
 */
DeDot.Stream.prototype.write = function () {
  this._transform.apply(this, arguments);
};

/**
 * Stream end (override).
 */
DeDot.Stream.prototype.end = function () {
  this._transform.apply(this, arguments);
  this.emit("end");
};

module.exports = DeDot;
