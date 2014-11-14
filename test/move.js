'use strict';

require('should');
var dj = require('../index.js')();

describe('DJ value picker:', function() {

  it('Should be able to move properties', function() {

    var link = {
      id: '527423a65e380f0000588e47',
      source: '526dd5c6b4c4aa8770000001',
      target: '527402d6b15d1800008755cf',
      out: 'github',
      in: 'in'
    };

    var expected = {
     id: '527423a65e380f0000588e47',
     source: {id: '526dd5c6b4c4aa8770000001', port: 'github'},
     target: {id: '527402d6b15d1800008755cf', port: 'in'}
    };

    dj.move('source', 'source.id', link);
    dj.move('out',  'source.port', link);
    dj.move('target', 'target.id', link);
    dj.move('in',   'target.port', link);

    link.should.eql(expected);

  });

  it('Undefined properties should be ignored', function() {

    var link = {
      source: '526dd5c6b4c4aa8770000001',
      target: '527402d6b15d1800008755cf',
      out: 'github',
      in: 'in'
    };

    var expected = {
     source: {id: '526dd5c6b4c4aa8770000001'},
     target: {port: 'in'},
     out: 'github'
    };

    dj.move('source', 'source.id', link);
    dj.move('out.er.nope',  'source.port', link);
    dj.move('target.bla.di.bla', 'target.id', link);
    dj.move('in',   'target.port', link);

    link.should.eql(expected);

  });

});
