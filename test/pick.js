require('should');
var _s = require('underscore.string');
var JSF = require('../index.js');

describe("JSF value picker:", function () {

  it("Should be able to pick a value", function (done) {

    var jsf = new JSF('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    var val = jsf.pick('some', obj);

    val.should.eql('value');

    done();

  });

  it("Should be able to pick dotted value", function (done) {

    var jsf = new JSF();

    var obj = {
      'some': {
        'other': 'value'
      }
    };

    var val = jsf.pick('some.other', obj);

    val.should.eql('value');

    done();

  });

});
