'use strict';

/*jshint -W030 */

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

    describe('can pick', function() {

      it('index', function() {
        Dot.pick('path.0', src).should.eql(src.path[0]);
        Dot.pick('path.2', src).should.eql(src.path[2]);
        (typeof Dot.pick('path.9', src)).should.eql('undefined');
      });

      it('negative index', function() {
        Dot.pick('path.-1', src).should.eql(src.path[2]);
        Dot.pick('path.-2', src).should.eql(src.path[1]);
        Dot.pick('path.-3', src).should.eql(src.path[0]);
        (typeof Dot.pick('path.-9', src)).should.eql('undefined');
      });

      it('non-array `-` prefixed properties', function() {
        var src = {
          path: {
            '-1': 'test1',
            '-2': 'test2',
            '-3': 'test3',
            '----key': 'test4'
          }
        };
        Dot.pick('path.-1', src).should.eql('test1');
        Dot.pick('path.-2', src).should.eql('test2');
        Dot.pick('path.-3', src).should.eql('test3');
        Dot.pick('path.----key', src).should.eql('test4');
        (typeof Dot.pick('path.-9', src)).should.eql('undefined');
      });

    });

    describe('can set', function() {

      it('index at target', function() {
        var obj = {path: []};

        Dot.set('path.0', 'test', obj);
        Dot.set('path.1', 'test2', obj);

        obj.path.should.be.an.Array;
        obj.should.eql({path: ['test', 'test2']});
      });

      it('index and set undefined for empty indices', function() {

        var obj = {path: []};

        Dot.set('path.0', 'test', obj);
        Dot.set('path.2', 'test2', obj);

        obj.path.should.be.an.Array;

        // array will have an undefined index.
        JSON.stringify(obj)
          .should.eql(
            JSON.stringify({path: ['test', undefined, 'test2']})
         );

        // to json will converted it to null
        JSON.stringify(obj).should.eql('{"path":["test",null,"test2"]}');

      });

      it('index and overwrite existing values', function() {

        var obj = {path: ['still', 'shall', 'be', 'gone', 'here']};

        Dot.set('path.1', 'x', obj);
        Dot.set('path.2', 'xx', obj);
        Dot.set('path.3', 'xxx', obj);

        obj.should.eql({path: ['still', 'x', 'xx', 'xxx', 'here']});

      });

    });

    describe('can remove', function() {

      it('indexes one by one leaving traces', function() {

        var obj = {path: ['still', 'shall', 'really', 'be', 'gone', 'here']};

        Dot.remove('path.1', obj);
        Dot.remove('path.2', obj);
        Dot.del('path.3', obj); // use alias
        Dot.del('path.4', obj);

        // array will have an undefined index.
        JSON.stringify(obj)
          .should.eql(
            JSON.stringify({
              path: [
                'still', undefined, undefined, undefined, undefined, 'here'
              ]
            })
         );

        // to json will converted it to null
        JSON.stringify(obj).should.eql(
          '{"path":["still",null,null,null,null,"here"]}'
        );
      });

      it('array of indexes leaving no traces', function() {

        var obj = {path: ['still', 'shall', 'really', 'be', 'gone', 'here']};

        Dot.remove(['path.1', 'path.2', 'path.3', 'path.4'], obj);

        JSON.stringify(obj).should.eql('{"path":["still","here"]}');

      });

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
