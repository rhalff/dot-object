require('should');
var _s = require('underscore.string');
var DeDot = require('../index.js');

describe("DeDot test:", function () {


  it("Redefinition should _not_ fail if override is true", function (done) {

    var dd = new DeDot('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    dd.str('already.new', 'value', obj);

    obj.should.eql({
      "some": "value",
      "already": { "new": "value" }
    });

    done();

  });

  it("Redefinition should _not_ fail if override is true", function (done) {

    var dd = new DeDot('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    dd.str('already.new', 'value', obj);
    dd.str('some', 'new_value', obj);

    obj.should.eql({
      "some": "new_value",
      "already": { "new": "value" }
    });

    done();

  });

  it("DeDot.object _should_ process non dot notation value with modifier when DeDot.override is true", function (done) {

    var dd = new DeDot('.', true);

    var row = {
      'title': 'my page',
      'slug': 'My Page'
    };

    var mods = {
      "title": _s.titleize,
      "slug": _s.slugify
    };

    dd.object(row, mods);

    row.should.eql({
      "title": "My Page",
      "slug": "my-page"
    });

    done();

  });

});
