import { test,expect} from "@playwright/test";

test("shadow dom",async({page})=>{

    await page.goto('https://books-pwakit.appspot.com/');
     
    await page.locator('#input').fill("Playwright automation");
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    const booksFound=await page.locator('h2.title').all()
    console.log("Books Found:",booksFound.length);

    expect(booksFound.length).toBe(20);
    

})
 
test("shadow dom2",async({page})=>{

    await page.goto('https://shop.polymer-project.org/');
     
    await page.locator("a[aria-label=\"Men's Outerwear Shop Now\"]").click()
    await page.waitForTimeout(5000);

    const productsFound=await page.locator('div.title').all()
    console.log("Books found:",productsFound.length);
    expect(productsFound.length).toBe(16);

    await page.waitForTimeout(3000);

})  


test('Handling dynamic dropdowns' , async({page}) => {
 
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 
    const country  = page.locator('#autocomplete');
    await country.pressSequentially('Ind');
    await page.locator('.ui-menu-item').first().click();
 
    await page.waitForTimeout(5000);
 
});
 
test('Handling dynamic dropdowns2' , async({page}) => {
 
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 
    const country  = page.locator('#autocomplete');
    await country.pressSequentially('ja');
    await page.locator('.ui-menu-item').nth(2).click();
 
    await page.waitForTimeout(5000);
   
});