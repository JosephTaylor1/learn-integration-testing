const functions = require('../functions.js');

describe('functions tests', () => {
    it('adds positive #s', () => {
        expect(functions.add(2,2)).toBe(4)
    });
    it('adds negative #s', () => {
        expect(functions.add(-1,-1)).toBe(-2)
    });
});
