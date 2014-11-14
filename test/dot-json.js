'use strict';

require('should');
var _s = require('underscore.string');
var DJ = require('../index.js');

describe('Dot Object test:', function() {

  it('Should Dot object keys', function() {

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
      'id': 2,
      'contact': {
        'name': {
          'first': 'John',
          'last': 'Doe'
        },
        'email': 'example@gmail.com',
        'info': {
          'about': {
            'me': 'classified'
          }
        }
      }
    });

  });

  it('Should Dot Object a string', function() {

    var obj = {};

    var dj = new DJ();

    dj.str('this.is.my.string', 'value', obj);

    obj.should.eql({
      'this': {
        'is': {
          'my': {
            'string': 'value'
          }
        }
      }
    });

  });

  it('DJ.str Redefinition should fail', function() {

    var obj = {
      'already': 'set'
    };

    (function() {

      var dj = new DJ();

      dj.str('already.new', 'value', obj);

    }).should.throw('Trying to redefine `already` which is a string');

  });

  it('DJ.str should process a modifier', function() {

    var obj = {};

    var dj = new DJ();

    dj.str('this.is.my.string', 'value', obj, _s.capitalize);

    obj.should.eql({
      'this': {
        'is': {
          'my': {
            'string': 'Value'
          }
        }
      }
    });

  });

  it('DOT.str should process multiple modifiers', function() {

    var obj = {};

    var dj = new DJ();

    dj.str(
      'this.is.my.string',
      '  this is a test   ',
      obj, [_s.trim, _s.underscored]
    );

    obj.should.eql({
      'this': {
        'is': {
          'my': {
            'string': 'this_is_a_test'
          }
        }
      }
    });

  });

  it('DJ.object should process a modifier', function() {

    var row = {
      'page.title': 'my page',
      'page.slug': 'My Page'
    };

    var mods = {
      'page.title': _s.titleize,
      'page.slug': _s.slugify
    };

    var dj = new DJ();

    dj.object(row, mods);

    row.should.eql({'page': {'title': 'My Page', 'slug': 'my-page'}});

  });

  it('should not process non dot value with modifier when override is false',
    function() {

      var row = {'title': 'my page', 'slug': 'My Page'};

      var mods = {'title': _s.titleize, 'slug': _s.slugify};

      var dj = new DJ();
      dj.object(row, mods);

      row.should.eql({'title': 'my page', 'slug': 'My Page'});

    }
  );

  it('DJ.object should process multiple modifiers', function() {

    var row = {'page.name': '    My Page    '};

    var mods = {'page.name': [_s.trim, _s.underscored]};

    var dj = new DJ();
    dj.object(row, mods);

    row.should.eql({'page': {'name': 'my_page'}});

  });

  it('DJ.object should work with a different seperator', function() {

    var row = {'page=>name': '    My Page    '};

    var mods = {'page=>name': [_s.trim, _s.underscored]};

    var dj = new DJ('=>', false);
    dj.object(row, mods);

    row.should.eql({'page': {'name': 'my_page'}});

  });

});
