require('should');
var _s = require('underscore.string');
var JSF = require('../index.js');

describe("JSF test:", function () {


  it("Redefinition should _not_ fail if override is true", function (done) {

    var jsf = new JSF('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    jsf.str('already.new', 'value', obj);

    obj.should.eql({
      "some": "value",
      "already": { "new": "value" }
    });

    done();

  });

  it("Redefinition should _not_ fail if override is true", function (done) {

    var jsf = new JSF('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    jsf.str('already.new', 'value', obj);
    jsf.str('some', 'new_value', obj);

    obj.should.eql({
      "some": "new_value",
      "already": { "new": "value" }
    });

    done();

  });

  it("JSF.object _should_ process non dot notation value with modifier when JSF.override is true", function (done) {

    var jsf = new JSF('.', true);

    var row = {
      'title': 'my page',
      'slug': 'My Page'
    };

    var mods = {
      "title": _s.titleize,
      "slug": _s.slugify
    };

    jsf.object(row, mods);

    row.should.eql({
      "title": "My Page",
      "slug": "my-page"
    });

    done();

  });

});
