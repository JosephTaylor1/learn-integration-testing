let url = 'https://scribol.com/pop-culture/celebrities/keanu-reeves-oscars-flirtatious/?l=a';
let timeout = 10000;

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
    it('Goes to next page and checks googletag', async () => {
        const googletag = await page.evaluate(() => googletag.apiReady)
        await page.click('div[class="nav-btn next-navigation-button"]')
        expect(googletag).toBeTruthy();
    }, timeout);
}, timeout);
