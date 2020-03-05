let url = 'https://scribol.com/pop-culture/celebrities/keanu-reeves-oscars-flirtatious/?l=a';
let timeout = 5000;

describe('Api test', () => {
    let page;
    beforeAll(async () => {
        page = await global.__BROWSER__.newPage();
        await page.goto(url);
    }, timeout)

    afterAll(async () => {
        await page.close()
    })

    it('Checks googletag', async () => {
        const googletag = await page.evaluate(() => googletag.apiReady)
        expect(googletag).toBeTruthy();
    }, timeout);
}, timeout);
