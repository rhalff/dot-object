require('should');
var _s = require('underscore.string');
var DeDot = require('../dedot.js');

describe("DeDot test:", function () {

  it("Should DeDot object keys", function (done) {

    var row = {
      'id': 2,
      'contact.name.first': 'John',
      'contact.name.last': 'Doe',
      'contact.email': 'example@gmail.com',
      'contact.info.about.me': 'classified'
    };

    DeDot.object(row);

    row.should.eql({
      "id": 2,
      "contact": {
        "name": {
          "first": "John",
          "last": "Doe"
        },
        "email": "example@gmail.com",
        "info": {
          "about": {
            "me": "classified"
          }
        }
      }
    });

    done();

  });

  it("Should DeDot a string", function (done) {

    var obj = {};

    DeDot.str('this.is.my.string', 'value', obj);

    obj.should.eql({
      "this": {
        "is": {
          "my": {
            "string": "value"
          }
        }
      }
    });

    done();

  });

  it("Redefinition should fail", function (done) {

    var obj = {
      'already': 'set'
    };

    (function () {

      DeDot.str('already.new', 'value', obj);

    }).should.throw("Trying to redefine 'already' which is a string");

    done();

  });

  it("Should process a modifier", function (done) {

    var obj = {};

    DeDot.str('this.is.my.string', 'value', obj, _s.capitalize);

    obj.should.eql({
      "this": {
        "is": {
          "my": {
            "string": "Value"
          }
        }
      }
    });

    done();

  });

  it("Should process multiple modifiers", function (done) {

    var obj = {};

    DeDot.str('this.is.my.string', '  this is a test   ', obj, [_s.trim, _s.underscored]);

    obj.should.eql({
      "this": {
        "is": {
          "my": {
            "string": "this_is_a_test"
          }
        }
      }
    });

    done();

  });

});
