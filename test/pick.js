'use strict';

require('should');
var DJ = require('../index.js');

describe('DJ value picker:', function() {

  it('Should be able to pick a value', function() {

    var dj = new DJ('.', true);

    var obj = {
      'some': 'value',
      'already': 'set'
    };

    var val = dj.pick('some', obj);

    val.should.eql('value');

  });

  it('Should be able to pick dotted value', function() {

    var dj = new DJ();

    var obj = {
      'some': {
        'other': 'value'
      }
    };

    var val = dj.pick('some.other', obj);

    val.should.eql('value');

  });

  it('Should be able to pick null properties', function() {

    var dj = new DJ();

    var obj = {
      'some': null
    };

    var val = dj.pick('some', obj);

    (val === null).should.be.true;

  });

  it('Should return undefined when picking an non-existing value', function() {

    var dj = new DJ();

    var obj = {
      'some': null
    };

    var val = dj.pick('other', obj);

    (val === undefined).should.be.true;

  });

  it('Should return undefined when picking an non-existing dotted value', function() {

    var dj = new DJ();

    var obj = {
      'some': null
    };

    var val = dj.pick('some.other', obj);

    (val === undefined).should.be.true;

  });

});
