require('should');
var _s = require('underscore.string');
var JSONParseStream  = require('./lib/JSONParseStream');
var JSF = require('../index.js');

describe("JSF test:", function () {

  it("JSF stream should convert", function (done) {

    // ok, the actual problem here is, how to pass our options ?
    // maybe using JSF.stream(options) ? // yep..
    // hm de mods worden uitgevoerd in JSF, behoren dus niet
    // tot MongoSink, whatever, dat is goed.
    
    // Data to be piped, maybe use some more lengthy file for this.
    // Only one record doesn't make much sense.
    
    
    done(); 

    /* TODO:
     *
    var fs = require("fs"),
    input = fs.createReadStream("fixtures/input.txt"),
    output = fs.createWriteStream("out/out.txt");
    
    var opts = {

      mods: {

      }
    
    };
    var jsf = new JSF.Stream(opts);
    input.pipe(jsf).pipe(output);

    done();

    */

  });


});
