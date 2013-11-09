require('should');
var _s = require('underscore.string');
var DJ = require('../index.js');

describe("Dot JSON test:", function () {

  it("Should Dot JSON object keys", function (done) {

    var dj = new DJ();

    var row = {
      'id': 2,
      'contact.name.first': 'John',
      'contact.name.last': 'Doe',
      'contact.email': 'example@gmail.com',
      'contact.info.about.me': 'classified'
    };

    dj.object(row);

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

  it("Should Dot JSON a string", function (done) {

    var obj = {};

    var dj = new DJ();

    dj.str('this.is.my.string', 'value', obj);

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

  it("DJ.str Redefinition should fail", function (done) {

    var obj = {
      'already': 'set'
    };

    (function () {

      var dj = new DJ();

      dj.str('already.new', 'value', obj);

    }).should.throw("Trying to redefine 'already' which is a string");

    done();

  });

  it("DJ.str should process a modifier", function (done) {

    var obj = {};

    var dj = new DJ();

    dj.str('this.is.my.string', 'value', obj, _s.capitalize);

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

  it("DOT.str should process multiple modifiers", function (done) {

    var obj = {};

    var dj = new DJ();

    dj.str('this.is.my.string', '  this is a test   ', obj, [_s.trim, _s.underscored]);

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

  it("DJ.object should process a modifier", function (done) {

    var row = {
      'page.title': 'my page',
      'page.slug': 'My Page'
    };

    var mods = {
      "page.title": _s.titleize,
      "page.slug": _s.slugify
    };

    var dj = new DJ();

    dj.object(row, mods);

    row.should.eql({
      "page": {
        "title": "My Page",
        "slug": "my-page"
      }
    });

    done();

  });

  it("DJ.object should not process non dot notation value with modifier when DJ.override is false", function (done) {

    var row = {
      'title': 'my page',
      'slug': 'My Page'
    };

    var mods = {
      "title": _s.titleize,
      "slug": _s.slugify
    };

    var dj = new DJ();
    dj.object(row, mods);

    row.should.eql({
      "title": "my page",
      "slug": "My Page"
    });

    done();

  });

  it("DJ.object should process multiple modifiers", function (done) {

    var row = {
      'page.name': '    My Page    '
    };

    var mods = {
      "page.name": [_s.trim, _s.underscored]
    };

    var dj = new DJ();
    dj.object(row, mods);

    row.should.eql({
      "page": {
        "name": "my_page"
      }
    });

    done();

  });

  it("DJ.object should work with a different seperator", function (done) {

    var row = {
      'page=>name': '    My Page    '
    };

    var mods = {
      "page=>name": [_s.trim, _s.underscored]
    };

    var dj = new DJ("=>", false);
    dj.object(row, mods);

    row.should.eql({
      "page": {
        "name": "my_page"
      }
    });

    done();

  });

});
