let url = 'https://scribol.com/pop-culture/celebrities/keanu-reeves-oscars-flirtatious/?l=a';
let page = await global.__BROWSER__.newPage();


describe('Api test', () => {
    await page.goto(url);

    it('Checks googletag', async () => {
        const googletag = await page.evaluate(() => window.googletag.apiReady);
        expect(googletag).toBeTruthy();
    });
}, 7000);
