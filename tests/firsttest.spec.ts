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

//  await page.locator('#exit_popup_close').click()
//  await page.getByText('Form Layouts').click()::
});
