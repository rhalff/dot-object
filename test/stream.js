require('should');
var _s = require('underscore.string');
var JSONParseStream  = require('./lib/JSONParseStream');
var DeDot = require('../dedot.js');

describe("DeDot test:", function () {

  it("DeDot stream should convert", function (done) {

    // ok, the actual problem here is, how to pass our options ?
    // maybe using DeDot.stream(options) ? // yep..
    // hm de mods worden uitgevoerd in DeDot, behoren dus niet
    // tot MongoSink, whatever, dat is goed.
    
    // Data to be piped, maybe use some more lengthy file for this.
    // Only one record doesn't make much sense.
    
    var fs = require("fs"),
    input = fs.createReadStream("fixtures/input.txt"),
    output = fs.createWriteStream("out/out.txt");
    
    var opts = {

      mods: {

      }
    
    };
    var deDot = new DeDot.Stream(opts);
    input.pipe(deDot).pipe(output);

    done();

  });


});
