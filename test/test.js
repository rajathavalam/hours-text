'use strict';

var expect = require('chai').expect;
var hourstext = require('../index');

describe('#numFormatter', function() {
    it('should convert single hour', function() {
        var result = hourstext(1);
        expect(result).to.equal('1 hour ago');
    });

    it('should convert 1 days ago', function() {
        var result = hourstext(25);
        expect(result).to.equal('1 day ago');
    });

    it('should convert one yaear back date', function() {
        var result = hourstext(5000);
        expect(result).to.equal('18 November, 2015');
    });

    
});
