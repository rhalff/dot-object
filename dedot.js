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
    } else if (DeDot.override) {
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

module.exports = DeDot;
