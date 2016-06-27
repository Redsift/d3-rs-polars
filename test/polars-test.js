var tape = require("@redsift/tape-reel")("<div id='test'></div>"),
    d3 = require("d3-selection"),
    polars = require("../");

// This test should be on all brick compatable charts
tape("html() empty state", function(t) {
    var host = polars.html();
    var el = d3.select('#test');
    el.call(host);
    
    t.equal(el.selectAll('svg').size(), 1);
       
    t.end();
});


tape("html() single", function(t) {
    var host = polars.html();
    var el = d3.select('#test');
    el.datum([ 1 ]).call(host);
    
    t.equal(el.selectAll('path').size(), 1);
    t.equal(el.selectAll('text').size(), 1);
           
    t.end();
});

tape("html() single", function(t) {
    var host = polars.html();
    var el = d3.select('#test');
    el.datum([ 1, 1 ]).call(host);
    
    t.equal(el.selectAll('path').size(), 2);
    t.equal(el.selectAll('text').size(), 2);
           
    t.end();
});