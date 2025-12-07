import {test , expect, Locator} from "@playwright/test";
 

test('Playwright Assertions Demo',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/")

     //1. Auto-retrying assertion (automatically retries untill it passes or times out) 
      await expect(page).toHaveURL('https://demowebshop.tricentis.com/',); //wait for correct url

      // Auto-retry: waits for the element to be visible and have the expected text
      await expect(page.locator('text=Welcome to our store')).toBeVisible();
      await expect(page.locator("div [class='product-grid home-page-product-grid'] strong")).toHaveText('Featured products')
 
      //2. Non-retrying assertion (executes immediatly, no retry)
      const title = await page.title();
      expect(title.includes('Demo Web Shop')).toBeTruthy(); // no auto-retry

      const welcomeText = await page.locator('text=Welcome to our store').textContent();
      expect(welcomeText).toContain('Welcome') // non-retry
      console.log(welcomeText);
      


      // 3. Negative matcher
    //   await expect(page.locator('text=Welcome to our store')).not.toBeVisible(); //auto-retry
    //   expect(welcomeText).not.toContain('Welcome'); //no auto-retry

      await page.waitForTimeout(5000);
})



test('Assertions Demo',async({page})=>
{
    
    await page.goto("https://demowebshop.tricentis.com/")

     //Hard assertions 
      await expect(page).toHaveTitle('Demo Web Shop2'); //failed
      await expect(page).toHaveURL('https://demowebshop.tricentis.com/',); 
      
      const logo:Locator= page.locator("img[alt='Tricentis Demo Web Shop']")
      await expect(logo).toBeVisible();
   

      await page.waitForTimeout(5000);
})


test.only('Soft Assertions Demo',async({page})=>
{
    await page.goto("https://demowebshop.tricentis.com/")

     //soft assertions 
      await expect.soft(page).toHaveTitle('Demo Web Shop2'); //failed
      await expect.soft(page).toHaveURL('https://demowebshop.tricentis.com/',); 
      
      const logo:Locator= page.locator("img[alt='Tricentis Demo Web Shop']")
      await expect.soft(logo).toBeVisible();
   

      await page.waitForTimeout(5000);
})
