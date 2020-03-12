const functions = require('../functions.js');

describe('functions tests', () => {
    it('adds positive #s', () => {
        expect(functions.add(2,2)).toBe(4)
    });
    it('adds negative #s', () => {
        expect(functions.add(-1,-1)).toBe(-2)
    });
    it('fetches the correct user\'s name', async () => {
        const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    }, 5000);
    it('fetches the correct username', async () => {
        const data = await functions.fetchUser();
        expect(data.username).toEqual('Bret');
    });
    it('reverses a string', () => {
        expect(functions.reverseString('Hello')).toEqual('olleH');
    });
});
