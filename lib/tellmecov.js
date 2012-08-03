var fs = require('fs');
var gm = require('gm');

// Prototype with Constructor for new
var tellmecov = function() { 
    // pass
};

tellmecov.prototype.getCoverageClass = function(argRank) {
    var rank = parseInt(argRank);
    if (rank >= 75) { return 'high'; }
    else if (rank >= 50) { return 'medium'; }
    else if (rank >= 25) { return 'low'; }
    else { return 'unknown'; }
};

tellmecov.prototype.setCoverageJson = function(argJson) {
    this.coveragesjon = argJson;
    this.checkCoverageJson(); // check json
};

tellmecov.prototype.readCoverageJson = function(argFilePath) {
    var buffer = fs.readFileSync(argFilePath); // Synchronous version of fs.readFile, If encoding is specified then this function returns a string. Otherwise it returns a buffer.
    this.coveragesjon = JSON.parse(buffer.toString());
    this.checkCoverageJson(); // check json
};

tellmecov.prototype.checkCoverageJson = function() {
    if ( ! 'coverage' in this.coveragesjon ) {
        throw new Error('json without coverage opt');
    }
};

tellmecov.prototype.getGlobalCoverageValue = function() {
    return this.coveragesjon.coverage;
};

tellmecov.prototype.getGlobalCoverageBadge = function(argDestFilePath) {

    var imgSource = __dirname+'/image/'+this.getCoverageClass(this.getGlobalCoverageValue())+'.png';
    gm(imgSource).font('DejaVu Sans Semi-Condensed').fontSize(10).fill('white').drawText(63, 10, ''+Math.ceil(this.getGlobalCoverageValue()))
        .write(argDestFilePath, function (err) {
            if (err) { 
                throw new Error(err);
            } else { 
                //pass, write only
            }
        })
    ;
};

module.exports = tellmecov;
