var DeDot = {};

DeDot._fill = function (a, obj, v, mod) {

  var k = a.shift(), i;

  if (a.length > 0) {

    obj[k] = obj[k] || {};

    if (obj[k] !== Object(obj[k])) {
      throw new Error("Trying to redefine '" + k + "' which is a " + typeof obj[k]);
    }

    DeDot._fill(a, obj[k], v, mod);

  } else {

    if (obj[k] === Object(obj[k]) && Object.keys(obj[k]).length) {
      throw new Error("Trying to redefine non-empty obj['" + k + "']");
    }

    if (typeof mod === 'function') {
      v = mod(v);
    } else if (mod instanceof Array) {
      for (i = 0; i < mod.length; i++) {
        v = mod[i](v);
      }
    }

    obj[k] = v;

  }
};

DeDot.object = function (obj, mod) {

  Object.keys(obj).forEach(function (k, i) {

    if (k.indexOf('.') !== -1) {
      DeDot._fill(k.split('.'), obj, obj[k], mod);
      delete obj[k];
    }

  });
};

DeDot.str = function (str, v, obj, mod) {

  if (str.indexOf('.') !== -1) {
    DeDot._fill(str.split('.'), obj, v, mod);
  }

};

module.exports = DeDot;
