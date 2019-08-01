'use strict'

require('should')
var Dot = require('../index')

describe('updateIn:', function () {
  it('Should be able to update value at given path using given function', function () {
    var obj = {
      counter: 1
    }

    Dot.updateIn('counter', function (currentValue) {
      return currentValue + 1;
    }, obj)

    obj.should.eql({counter: 2})
  })
})
