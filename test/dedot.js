require('should');
var _s = require('underscore.string');
var DeDot = require('../index.js');

describe("DeDot test:", function () {

  it("Should DeDot object keys", function (done) {

    var dd = new DeDot();

    var row = {
      'id': 2,
      'contact.name.first': 'John',
      'contact.name.last': 'Doe',
      'contact.email': 'example@gmail.com',
      'contact.info.about.me': 'classified'
    };

    dd.object(row);

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

    var dd = new DeDot();

    dd.str('this.is.my.string', 'value', obj);

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

  it("DeDot.str Redefinition should fail", function (done) {

    var obj = {
      'already': 'set'
    };

    (function () {

      var dd = new DeDot();

      dd.str('already.new', 'value', obj);

    }).should.throw("Trying to redefine 'already' which is a string");

    done();

  });

  it("DeDot.str should process a modifier", function (done) {

    var obj = {};

    var dd = new DeDot();

    dd.str('this.is.my.string', 'value', obj, _s.capitalize);

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

  it("DeDot.str should process multiple modifiers", function (done) {

    var obj = {};

    var dd = new DeDot();

    dd.str('this.is.my.string', '  this is a test   ', obj, [_s.trim, _s.underscored]);

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

  it("DeDot.object should process a modifier", function (done) {

    var row = {
      'page.title': 'my page',
      'page.slug': 'My Page'
    };

    var mods = {
      "page.title": _s.titleize,
      "page.slug": _s.slugify
    };

    var dd = new DeDot();

    dd.object(row, mods);

    row.should.eql({
      "page": {
        "title": "My Page",
        "slug": "my-page"
      }
    });

    done();

  });

  it("DeDot.object should not process non dot notation value with modifier when DeDot.override is false", function (done) {

    var row = {
      'title': 'my page',
      'slug': 'My Page'
    };

    var mods = {
      "title": _s.titleize,
      "slug": _s.slugify
    };

    var dd = new DeDot();
    dd.object(row, mods);

    row.should.eql({
      "title": "my page",
      "slug": "My Page"
    });

    done();

  });

  it("DeDot.object should process multiple modifiers", function (done) {

    var row = {
      'page.name': '    My Page    '
    };

    var mods = {
      "page.name": [_s.trim, _s.underscored]
    };

    var dd = new DeDot();
    dd.object(row, mods);

    row.should.eql({
      "page": {
        "name": "my_page"
      }
    });

    done();

  });

  it("DeDot.object should work with a different seperator", function (done) {

    var row = {
      'page=>name': '    My Page    '
    };

    var mods = {
      "page=>name": [_s.trim, _s.underscored]
    };

    var dd = new DeDot("=>", false);
    dd.object(row, mods);

    row.should.eql({
      "page": {
        "name": "my_page"
      }
    });

    done();

  });

});
