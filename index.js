var DotJSON = (function () {
    function DotJSON(seperator, override) {
        if (typeof seperator === "undefined") { seperator = '.'; }
        if (typeof override === "undefined") { override = false; }
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
                    throw new Error("Trying to redefine '" + k + "' which is a " + typeof obj[k]);
                }
            }

            this._fill(a, obj[k], v, mod);
        } else {
            if (obj[k] === Object(obj[k]) && Object.keys(obj[k]).length) {
                throw new Error("Trying to redefine non-empty obj['" + k + "']");
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
        var that = this;

        Object.keys(obj).forEach(function (k, i) {
            var mod = mods === undefined ? null : mods[k];

            if (k.indexOf(that.seperator) !== -1) {
                that._fill(k.split(that.seperator), obj, obj[k], mod);
                delete obj[k];
            } else if (that.override) {
                obj[k] = that.process(obj[k], mod);
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

    DotJSON.prototype.pick = function (str, obj) {
        var i, keys;

        if (str.indexOf(this.seperator) !== -1) {
            keys = str.split(this.seperator);
            for (i = 0; i < keys.length; i++) {
                obj = obj[keys[i]];
            }
            return obj;
        } else {
            return obj[str];
        }
    };
    return DotJSON;
})();

module.exports = DotJSON;
