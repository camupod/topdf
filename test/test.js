
var topdf = require('../lib/topdf'),
    assert = require('assert');

// set some options
var options = {

    fontdirectory: '/usr/share/fonts/truetype',
    headings: true,
    override: true,
    gridlines: true,
    compression: true,
    memory: 1024,
    pages: 10,
    outputdpi: 0,
    graphicresizemethod: 1

};

// convert a single document, using default settings
topdf.convert('./test/etc/foo.xlsx', './test/etc/foo.pdf', options, function (err, success) {

    if (err) {

        console.log(err);

        // no errors
        assert.ifError(err);

    }

    // successful
    assert.ok(success);

});
