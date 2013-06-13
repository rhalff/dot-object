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

});
