// -*- coding: utf-8 -*-

var libpath = process.env['TELLMECOV'] ? '../lib-cov' : '../lib';

var should = require('should');
var underscore = require('underscore');
var tellmecov = require(libpath+'/tellmecov');

describe('tellmecov', function() {
    
    it('test getGlobalCoverageValue', function(done) {
        var result = new tellmecov();
        result.readCoverageJson(__dirname+'/coverage.json');
        var rank = result.getGlobalCoverageValue();
        rank.should.eql(100);
        result = null;
        done();
    });
    
    //~ it('test getGlobalCoverageBadge', function(done) {
        //~ var result = new tellmecov();
        //~ result.readCoverageJson(__dirname+'/coverage.json');
        //~ var rank = result.getGlobalCoverageBadge('/home/alban/tellmecov.png');
        //~ rank.should.eql(100);
        //~ result = null;
        //~ done();
    //~ });
    

    
});
