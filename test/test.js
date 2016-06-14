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

    it('should convert one week back text', function() {
        var result = hourstext(168);
        expect(result).to.equal('1 week ago');
    });

 it('should convert 6 days back', function() {
        var result = hourstext(144);
        expect(result).to.equal('6 days ago');
    });

 it('should convert one week back text', function() {
        var result = hourstext(330);
        expect(result).to.equal('1 week ago');
    });

    
});
