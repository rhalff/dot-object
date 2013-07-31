require('should');
var _s = require('underscore.string');
var DeDot = require('../dedot.js');

describe("DeDot test:", function () {


  it("Redefinition should _not_ fail if override is true", function (done) {

    DeDot.override = true;

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    DeDot.str('already.new', 'value', obj);

    obj.should.eql({
      "some": "value",
      "already": { "new": "value" }
    });

    DeDot.override = false;

    done();

  });

  it("Redefinition should _not_ fail if override is true", function (done) {

    DeDot.override = true;

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    DeDot.str('already.new', 'value', obj);
    DeDot.str('some', 'new_value', obj);

    obj.should.eql({
      "some": "new_value",
      "already": { "new": "value" }
    });

    DeDot.override = false;

    done();

  });

  it("DeDot.object _should_ process non dot notation value with modifier when DeDot.override is true", function (done) {

    DeDot.override = true;

    var row = {
      'title': 'my page',
      'slug': 'My Page'
    };

    var mods = {
      "title": _s.titleize,
      "slug": _s.slugify,
    };

    console.log(row);
    console.log(mods);

    // underscored !?

    DeDot.object(row, mods);
    console.log(row);

    row.should.eql({
      "title": "My Page",
      "slug": "my-page"
    });

    DeDot.override = false;

    done();

  });

});
