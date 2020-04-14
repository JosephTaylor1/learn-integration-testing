const functions = require('../Functions/functions.js');

describe('functions tests', () => {

    /** Unit Testing Examples **/

    it('adds positive #s', () => {
        expect(functions.add(2,2)).toBe(4)
    });

    it('adds negative #s', () => {
        expect(functions.add(-1,-1)).toBe(-2)
    });

    it('reverses a string', () => {
        expect(functions.reverseString('Hello')).toEqual('olleH');
    });
});
