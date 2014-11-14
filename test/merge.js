'use strict';

require('should');
var dj = require('../index.js')();

describe('Should be able to merge:', function() {

  it('to property', function() {

    var link = {
      other: {
        three: 'Three Things',
        four: 'Four Things'
      },
      things: {
        one: 'One Thing',
        two: 'Two Things'
      }
    };

    var expected = {
      things: {
        one: 'One Thing',
        two: 'Two Things',
        three: 'Three Things',
        four: 'Four Things'
      }
    };

    dj.move('other',  'things', link, true);

    link.should.eql(expected);

  });

  it('to nested property', function() {

    var link = {
      other: {
        three: 'Three Things',
        four: 'Four Things'
      },
      things: {
        one: 'One Thing',
        two: 'Two Things',
        target: {
          im: 'already here'
        }
      }
    };

    var expected = {
      things: {
        one: 'One Thing',
        two: 'Two Things',
        target: {
          im: 'already here',
          three: 'Three Things',
          four: 'Four Things'
        }
      }
    };

    dj.move('other',  'things.target', link, true);

    link.should.eql(expected);

  });

});
