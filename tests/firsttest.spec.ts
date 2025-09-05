import { test, expect } from '@playwright/test';
test.beforeEach(async({page}) => {
     await page.goto('https://www.promod.com/')
     await page.locator('#link_optoutAll').click()
})
test ('Create an account', async ({page}) => {
     await page.getByRole('link', { name: 'Account' }).click();
     await page.getByTitle('Create an account').click();
     const createMyAccount = await page.locator('[class="pmd-form"]').filter({hasText: "CREATE MY ACCOUNT"})
     await createMyAccount.getByRole('textbox', {name: 'Email address'}).fill('elenapumpkin8@gmail.com')
     await createMyAccount.getByRole('textbox', {name: 'Password'}).fill('Welcome123')
     await createMyAccount.getByRole('button', {name: 'CREATE MY ACCOUNT'}).click();

});
test ('Sign in', async({page}) => {
     await page.getByRole('link', { name: 'Account' }).click()
     await page.getByLabel('email address').click()
     await page.getByLabel('email address').fill('elenapumpkin8@gmail.com')
     await page.getByLabel('email address').press('Tab')
     await page.getByLabel('Password').fill('Welcome123')
     await page.getByRole('button', {name: 'LOG-IN'}).click()
     expect(await page.waitForURL('https://www.promod.com/en/account/dashboard/'));
});
test ('Add to Cart', async ({page}) => {
     await page.getByRole('button', {name: 'Ready to wear'}).click()
     await page.locator('a[href="/en/suits--plblta4d53b87a9910b7b/"]').click();
     expect(await page.waitForURL('https://www.promod.com/en/suits--plblta4d53b87a9910b7b/'));
     let elementBlazer = await page.getByRole('button', {name: 'Buy Plain crossover blazer'});
     await elementBlazer.scrollIntoViewIfNeeded();
     await elementBlazer.click();
     expect(await page.locator('#product-203445--name').textContent()).toEqual('Plain crossover blazer');

})
