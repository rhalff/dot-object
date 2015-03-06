'use strict';

require('should');
var Dot = require('../index.js');

describe('Move test:', function() {

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

    Dot.move('source', 'source.id', link);
    Dot.move('out',  'source.port', link);
    Dot.move('target', 'target.id', link);
    Dot.move('in',   'target.port', link);

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

    Dot.move('source', 'source.id', link);
    Dot.move('out.er.nope',  'source.port', link);
    Dot.move('target.bla.di.bla', 'target.id', link);
    Dot.move('in',   'target.port', link);

    link.should.eql(expected);

  });

});
