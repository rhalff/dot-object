require('should');
var _s = require('underscore.string');
var DJ = require('../index.js');

describe("DJ test:", function () {


  it("Redefinition should _not_ fail if override is true", function (done) {

    var dj = new DJ('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    dj.str('already.new', 'value', obj);

    obj.should.eql({
      "some": "value",
      "already": { "new": "value" }
    });

    done();

  });

  it("Redefinition should _not_ fail if override is true", function (done) {

    var dj = new DJ('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    dj.str('already.new', 'value', obj);
    dj.str('some', 'new_value', obj);

    obj.should.eql({
      "some": "new_value",
      "already": { "new": "value" }
    });

    done();

  });

  it("DJ.object _should_ process non dot notation value with modifier when DJ.override is true", function (done) {

    var dj = new DJ('.', true);

    var row = {
      'title': 'my page',
      'slug': 'My Page'
    };

    var mods = {
      "title": _s.titleize,
      "slug": _s.slugify
    };

    dj.object(row, mods);

    row.should.eql({
      "title": "My Page",
      "slug": "my-page"
    });

    done();

  });

});
