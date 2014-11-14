'use strict';

require('should');
var dj = require('../index.js')();

describe('Merge:', function() {

  it('Should be able to merge properties', function() {

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

});
