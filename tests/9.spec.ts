import { test,expect} from "@playwright/test";

test("Control Ui",async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const documentlink =page.locator("[href*='documents-request']")
    const dropdown =page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator('#okayBtn').click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator('#terms').click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute("class","blinkingText");

});

test("Control Ui2",async({page})=>{

    await page.goto('https://books-pwakit.appspot.com/');
     
    await page.locator('#input').fill("Playwright automation");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    const booksFound=await page.locator('h2.title').all()
    console.log("Books Found:",booksFound.length);

    expect(booksFound.length).toBe(20);
    

})