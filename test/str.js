'use strict'

require('should')
var Dot = require('../index')

describe('str:', function () {
  it('can set root property', function () {
    Dot.str('b', 2, {
      a: 1
    }).should.deepEqual({
      a: 1,
      b: 2
    })
  })

  it('can set nested property', function () {
    Dot.str('b.a', 2, {
      a: 1
    }).should.deepEqual({
      a: 1,
      b: {
        a: 2
      }
    })
  })

  it('can set root level property regardless whether override is set', function () {
    Dot.str('a', 'b', {
      a: 1
    }).should.deepEqual({
      a: 'b'
    })
  })
})
