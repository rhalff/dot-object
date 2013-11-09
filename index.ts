/// <reference path="lib/node.d.ts" />

class DotJSON {

  constructor(public seperator: string = '.',
              public override: boolean = false) {
  }

  private _fill(a: Array, obj, v: string, mod) : void {

    var k = a.shift();

    if (a.length > 0) {

      obj[k] = obj[k] || {};

      if (obj[k] !== Object(obj[k])) {
        if (this.override) {
          obj[k] = {};
        } else {
          throw new Error("Trying to redefine '" + k + "' which is a " + typeof obj[k]);
        }
      }

      this._fill(a, obj[k], v, mod);

    } else {

      // TODO: make sure this is ever used
      if (obj[k] === Object(obj[k]) && Object.keys(obj[k]).length) {
        throw new Error("Trying to redefine non-empty obj['" + k + "']");
      }

      obj[k] = this.process(v, mod);

    }
  }

  /**
   * Process.
   *
   * @method process 
   * @param {String} value 
   * @param {function|Array} mod
   * @return {String} Returns modified value
   */
  public process(v: string, mod) : string {

    var i : number;

    if (typeof mod === 'function') {
      v = mod(v);
    } else if (mod instanceof Array) {
      for (i = 0; i < mod.length; i++) {
        v = mod[i](v);
      }
    }

    return v;

  }

  public object(obj : Object, mods) : void {

    var that = this;

    Object.keys(obj).forEach(function (k : string, i : number) {

      var mod = mods === undefined ? null : mods[k];

      if (k.indexOf(that.seperator) !== -1) {
        that._fill(k.split(that.seperator), obj, obj[k], mod);
        delete obj[k];
      } else if(that.override) {
        obj[k] = that.process(obj[k], mod);
      }

    });
  }

  public str(str : string, v : string, obj : Object, mod) : void {

    if (str.indexOf(this.seperator) !== -1) {
      this._fill(str.split(this.seperator), obj, v, mod);
    } else if (this.override) {
      obj[str] = this.process(v, mod);
    }

  }

  public pick(str : string, obj : Object) : any {

    var i, keys;

    if (str.indexOf(this.seperator) !== -1) {
      keys = str.split(this.seperator);
      for(i = 0; i < keys.length; i++) { obj = obj[keys[i]]; }
      return obj;
    } else {
      return obj[str];
    }

  }

}

module.exports = DotJSON;
