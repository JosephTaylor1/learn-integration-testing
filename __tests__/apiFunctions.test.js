const apiCalls = require('../API/apiCalls.js');
const timeout = 6000; //sets timeout for entire file

describe('test different API calls', () => {
    /** API Testing Examples **/

    it('fetches the correct user\'s name', async () => {
        const data = await apiCalls.fetchUser();
        expect(data.name).toEqual('Leanne Graham');
    }, timeout);

    it('fetches the correct username', async () => {
        const data = await apiCalls.fetchUser();
        expect(data.username).toEqual('Bret');
    }, timeout);

    it('fetches the correct endpoint', async () => {
        const data = await apiCalls.fetchApiData('comments/1');
        expect(data.email).toEqual('Eliseo@gardner.biz');
    }, timeout);

    it('fetches the email from user 2', async () => { //checks a specific key contains
        const data = await apiCalls.fetchApiData('comments/2'); //a specific value in the returned endpoint
        expect(data.email).toEqual('Jayne_Kuhic@sydney.com');
    }, timeout);

    it('checks posts endpoint', async () => { //checks that the endpoint contains..
        const data = await apiCalls.fetchApiData('posts/1'); //..a certain key in the returned object
        expect(data).toHaveProperty("title");
    }, timeout);

    it('asserts the object prop types', async () => {
        const data = await apiCalls.fetchApiData('posts/2');
        expect(data).toMatchObject({ //checks that returned object keys match expected values
            userId: 1,
            id: 2,
            title: "qui est esse"
        });
    }, timeout);

    it('asserts the object prop types', async () => {
        const data = await apiCalls.fetchApiData('posts/3');
        expect(data).toMatchObject({ //checks that returned object keys match expected primitive values
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
        });
    }, timeout);
});
