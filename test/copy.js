'use strict';

require('should');
var Dot = require('../index');

describe('Copy:', function () {

  it('Should be able to copy properties', function () {

    var src = {
      name: 'John',
      stuff: {
        phone: {
          brand: 'iphone',
          version: 6
        }
      }
    };

    var tgt = {
      name: 'Brandon'
    };

    var src_expected = JSON.parse(JSON.stringify(src));

    var tgt_expected = {
      name: 'Brandon',
      wanna: {
        haves: {
          phone: {
            brand: 'iphone',
            version: 6
          }
        }
      }
    };

    Dot.copy('stuff.phone', 'wanna.haves.phone', src, tgt);

    src.should.eql(src_expected);
    tgt.should.eql(tgt_expected);

  });

  it('Should process modifiers', function () {

    var up = function (val) {
      val.brand = val.brand.toUpperCase();
      return val;
    }

    var src = {
      name: 'John',
      stuff: {
        phone: {
          brand: 'iphone',
          version: 6
        }
      }
    };

    var tgt = {
      name: 'Brandon'
    };

    var src_expected = JSON.parse(JSON.stringify(src));

    var tgt_expected = {
      name: 'Brandon',
      wanna: {
        haves: {
          phone: {
            brand: 'IPHONE',
            version: 6
          }
        }
      }
    };

    Dot.copy('stuff.phone', 'wanna.haves.phone', src, tgt, up);

    src.should.eql(src_expected);
    tgt.should.eql(tgt_expected);

  });

});
