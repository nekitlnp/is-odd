'use strict';

require('mocha');
const assert = require('assert');
const isOdd = require('./');
const isEven = require('./');
const isGreater = require('./');
const isLess = require('./');

describe('isOdd', function() {
  it('should return true if the number is odd:', function() {
    assert(!isOdd(0));
    assert(!isOdd(2));
    assert(isOdd(1));
    assert(isOdd(3));
    assert(isOdd(-1));
    assert(isOdd(-3));
    assert(isOdd(1.0e0));
    assert(isOdd(9007199254740991));
  });

  it('should work with strings:', function() {
    assert(!isOdd('0'));
    assert(!isOdd('2'));
    assert(isOdd('1'));
    assert(isOdd('3'));
    assert(isOdd('1.0e0'));
    assert(isOdd('9007199254740991'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isOdd(), /expected a number/);
    assert.throws(() => isOdd('foo'), /expected a number/);
    assert.throws(() => isOdd('1.1e0'), /expected an integer/);
    assert.throws(() => isOdd('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isOdd(9007199254740992), /value exceeds maximum safe integer/);
  });
});

describe('isEven', function() {
  it('should return true if the number is even:', function() {
    assert(!isEven(0));
    assert(!isEven(2));
    assert(isEven(1));
    assert(isEven(3));
    assert(isEven(-1));
    assert(isEven(-3));
    assert(isEven(1.0e0));
    assert(isEven(9007199254740990));
  });

  it('should work with strings:', function() {
    assert(!isEven('0'));
    assert(!isEven('1'));
    assert(isEven('2'));
    assert(isEven('3'));
    assert(isEven('1.0e0'));
    assert(isEven('9007199254740990'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isEven(), /expected a number/);
    assert.throws(() => isEven('foo'), /expected a number/);
    assert.throws(() => isEven('1.1e0'), /expected an integer/);
    assert.throws(() => isEven('9007199254740992'), /value exceeds maximum safe integer/);
    assert.throws(() => isEven(9007199254740992), /value exceeds maximum safe integer/);
  });
});

describe('isGreater', function() {
  it('should return true if the number is even:', function() {
    assert(!isGreater(1,0));
    assert(!isGreater(2,1));
    assert(isGreater(3,1));
    assert(isGreater(3,5));
    assert(isGreater(-1,0));
    assert(isGreater(-3,4));
    assert(isGreater(2.0e0,1.0e0));
    assert(isGreater(9007199254740991,9007199254740990));
  });

  it('should work with strings:', function() {
    assert(isGreater('3','5'));
    assert(isGreater('-1','0'));
    assert(isGreater('-3','4'));
    assert(isGreater('2.0e0','1.0e0'));
    assert(isGreater('9007199254740991','9007199254740990'));
  });

  it('should throw an error when an invalid value is passed', function() {
    assert.throws(() => isGreater(), /expected a number/);
    assert.throws(() => isGreater('foo','boo'), /expected a number/);
    assert.throws(() => isGreater('1.1e0','1.2e0'), /expected an integer/);
    assert.throws(() => isGreater('9007199254740992','9007199254740993'), /value exceeds maximum safe integer/);
    assert.throws(() => isGreater(9007199254740992,9007199254740993), /value exceeds maximum safe integer/);
  });
});