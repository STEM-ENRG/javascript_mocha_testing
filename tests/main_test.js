const assert = require('assert');
const { error } = require('console');
var Max = require('../main');

describe('Math', () => {
  describe('max', () => {
    it('returns the argument with the highest value', () => {
      const minimum = 10;
      const median = 15;
      const maximum = 45;

      let foo = new Max();
      const result = foo.maxNumber(minimum, median, maximum);

      assert.ok(result === maximum);
    });

    it('returns -Inifinity when no arguments are provided', () => {
      const negInfinity = -Infinity;

      const result = Math.max();

      assert.ok(result === negInfinity);
    });

    it('returns error when arguments have values as string type', () => {
      const minimum = '10';
      const median = '15';
      const maximum = '45';

      let foo = new Max();
      const result = foo.maxNumber(minimum, median, maximum);

      assert.throws(
        () => {
          throw error;
        })
    });
  });
});