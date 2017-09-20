'use strict'

require('should')
var Dot = require('../index')
var pkg = require('./fixtures/package.json')

describe('dot():', function () {
  var obj

  beforeEach(function () {
    obj = {
      id: 'my-id',
      nes: {
        ted: {
          value: true
        }
      },
      other: {
        nested: {
          stuff: 5
        }
      },
      some: {
        array: ['A', 'B']
      },
      ehrm: 123,
      dates: {
        first: new Date('Mon Oct 13 2014 00:00:00 GMT+0100 (BST)')
      }
    }
  })

  it('Should be able to convert to dotted-key/value pairs', function () {
    var expected = {
      id: 'my-id',
      'nes.ted.value': true,
      'other.nested.stuff': 5,
      'some.array.0': 'A',
      'some.array.1': 'B',
      ehrm: 123,
      'dates.first': new Date('Mon Oct 13 2014 00:00:00 GMT+0100 (BST)')
    }

    Dot.dot(obj).should.eql(expected)
  })

  it('dot() should equal object()', function () {
    Dot.object(Dot.dot(pkg)).should.eql(pkg)
  })

  it('keepArray prevents arrays from being dotted', function () {
    var expected = {
      id: 'my-id',
      'nes.ted.value': true,
      'other.nested.stuff': 5,
      'some.array': ['A', 'B'],
      ehrm: 123,
      'dates.first': new Date('Mon Oct 13 2014 00:00:00 GMT+0100 (BST)')
    }

    Dot.keepArray = true

    Dot.dot(obj).should.eql(expected)

    Dot.keepArray = false
  })

  it('Always keeps empty arrays', function () {
    Dot.dot({ hello: [] }).should.eql({ 'hello': [] })
    Dot.dot({ hello: { world: [] } }).should.eql({ 'hello.world': [] })
  })

  it('Always keeps empty objects', function () {
    Dot.dot({ hello: {} }).should.eql({ 'hello': {} })
    Dot.dot({ hello: { world: {} } }).should.eql({ 'hello.world': {} })
  })
})
