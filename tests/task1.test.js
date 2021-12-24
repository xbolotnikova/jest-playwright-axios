jest.setTimeout(40 * 1000)
const {chromium} = require('playwright');

test('UI Automation task', async () => {
    let base_url = 'http://automationpractice.com/index.php'

    await page.goto(base_url);
    await page.click('.login');
    await page.type('input[id="email"]', "vakarianxn@gmail.com");
    await page.type('input[id="passwd"]', "SecurePassword123!");
    await page.press('#SubmitLogin', "Enter");
    await page.click('.logout');
    await page.type('input[id="email"]', "vakarianxn@gmail.com");
    await page.type('input[id="passwd"]', "SecurePassword123!");
    await page.press('#SubmitLogin', "Enter");
    await page.goto(base_url + '?mylogout=');
});
