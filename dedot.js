var DeDot = {};

DeDot._fill = function (a, obj, v) {

  var k = a.shift();

  if (a.length > 0) {

    obj[k] = obj[k] || {};

    if (obj[k] !== Object(obj[k])) {
      throw new Error("Trying to redefine '" + k + "' which is a " + typeof obj[k]);
    }

    DeDot._fill(a, obj[k], v);

  } else {

    if (obj[k] === Object(obj[k]) && Object.keys(obj[k]).length) {
      throw new Error("Trying to redefine non-empty obj['" + k + "']");
    }

    obj[k] = v;

  }
};

DeDot.object = function (obj) {

  Object.keys(obj).forEach(function (k, i) {

    if (k.indexOf('.') !== -1) {
      DeDot._fill(k.split('.'), obj, obj[k]);
      delete obj[k];
    }

  });
};

DeDot.str = function (str, v, obj) {

  if (str.indexOf('.') !== -1) {
    DeDot._fill(str.split('.'), obj, v);
  }

};

module.exports = DeDot;
