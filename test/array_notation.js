'use strict';

require('should');
var Dot = require('../index');

describe('Dotted Array notation', function() {

  var template;
  var src;

  beforeEach(function() {

    src = {
      path: [{
        'longitude': 5.512482166290283,
        'latitude': 52.5006217956543,
      }, {
        'longitude': 5.512370586395264,
        'latitude': 52.50059509277344,
      }, {
        'longitude': 5.512370586395264,
        'latitude': 52.50059509277344,
      }]
    };

    template = {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [], // [-75.343, 39.984]},
          'properties': {
            'name': 'Start'
          }
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          // 'coordinates': [-75.833, 39.284]},
          'properties': {
            'name': 'Finish'
          }
        }
      }, {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': null
            // [102, 0], [103, 1], [104, 0],[105, 1]]
            //'coordinates': [[102, 0], [103, 1], [104, 0],[105, 1]]
        }
      }]
    };
  });

  describe('with dot notation', function() {

    it('can pick index', function() {
      Dot.pick('path.0', src).should.eql(src.path[0]);
      Dot.pick('path.2', src).should.eql(src.path[2]);
      (typeof Dot.pick('path.9', src)).should.eql('undefined');
    });

    it('can pick negative index', function() {
      Dot.pick('path.-1', src).should.eql(src.path[2]);
      Dot.pick('path.-2', src).should.eql(src.path[1]);
      Dot.pick('path.-3', src).should.eql(src.path[0]);
      (typeof Dot.pick('path.-9', src)).should.eql('undefined');
    });

    it('still recognizes other `-` prefixed properties', function() {
      Dot.pick('path.----key', {
        path: {
          '----key': 'test'
        }
      }).should.eql('test');
    });

    it('still recognizes object keys with the same notation', function() {
      var src = {
        path: {
          '-1': 'test1',
          '-2': 'test2',
          '-3': 'test3'
        }
      };
      Dot.pick('path.-1', src).should.eql('test1');
      Dot.pick('path.-2', src).should.eql('test2');
      Dot.pick('path.-3', src).should.eql('test3');
      (typeof Dot.pick('path.-9', src)).should.eql('undefined');
    });

  });

  // extra logic no real benefit.
  xdescribe('with bracket notation', function() {

    it('can pick index', function() {
      Dot.pick('path[0]', src).should.eql(src.path[0]);
      Dot.pick('path[2]', src).should.eql(src.path[2]);
    });

  });

});
