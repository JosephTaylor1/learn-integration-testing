const functions = require('../functions.js');
const timeout = 5000;

describe('functions tests', () => {

    /** Unit Testing Examples **/

    it('adds positive #s', () => {
        expect(functions.add(2,2)).toBe(4)
    });
    it('adds negative #s', () => {
        expect(functions.add(-1,-1)).toBe(-2)
    });
    it('fetches the correct user\'s name', async () => {
        const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    }, timeout);
    it('fetches the correct username', async () => {
        const data = await functions.fetchUser();
        expect(data.username).toEqual('Bret');
    }, timeout);
    it('reverses a string', () => {
        expect(functions.reverseString('Hello')).toEqual('olleH');
    });

    /** API Testing Examples **/

    it('fetches the correct endpoint', async () => {
        const data = await functions.fetchApiData('comments/1');
        expect(data.email).toEqual('Eliseo@gardner.biz');
    }, timeout);

    it('fetches the email from user 2', async () => { //checks a specific key contains
        const data = await functions.fetchApiData('comments/2'); //a specific value in the returned endpoint
        expect(data.email).toEqual('Jayne_Kuhic@sydney.com');
    }, timeout);

    it('checks posts endpoint', async () => { //checks that the endpoint contains..
        const data = await functions.fetchApiData('posts/1'); //..a certain key in the returned object
        expect(data).toHaveProperty("title");
    }, timeout);

    it('asserts the object prop types', async () => {
        const data = await functions.fetchApiData('posts/2');
        expect(data).toMatchObject({ //checks that returned object keys match expected values
            userId: 1,
            id: 2,
            title: "qui est esse"
        });
    }, timeout);

    it('asserts the object prop types', async () => {
        const data = await functions.fetchApiData('posts/3');
        expect(data).toMatchObject({ //checks that returned object keys match expected primitive values
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
        });
    }, timeout);
});
