import { test,expect,Page, chromium, } from "@playwright/test";


test("Browser context demo",async()=>{

   const browser=await chromium.launch()   ///create browser
   const context=await browser.newContext();  //create context

   //creating 2 pages
   const page1=await context.newPage();
   const page2=await context.newPage();
   console.log("no of pages", context.pages().length);
   
   await page1.goto("https://testautomationpractice.blogspot.com/")
   await expect(page1).toHaveTitle("Automation Testing Practice")

    await page2.goto("https://playwright.dev");
   await expect(page2).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
   await page1.waitForTimeout(5000)
   await page2.waitForTimeout(5000)
})


test("handle tabs",async()=>{

   const browser=await chromium.launch()   
   const context=await browser.newContext();  
   const page=await context.newPage();
   await page.goto("https://testautomationpractice.blogspot.com/")

   const [childpage] =await  Promise.all([context.waitForEvent('page'), page.locator("button:has-text('New Tab')").click()])
   
   //1) switch between pages and get titles(using context)
  const pages=context.pages(); //returns array
  console.log("Number of pages created" , pages.length);
  console.log("title of the pages:",await pages[0].title());
   
  //2)alternate
  console.log("title of the pages:" , await page.title());
  await browser.close();
})



//multiple popups
test("handle popups",async({browser})=>{

   const context=await browser.newContext();  
   const page=await context.newPage();
   await page.goto("https://testautomationpractice.blogspot.com/")
   
   await Promise.all([
      page.waitForEvent('popup'),
      page.locator("#PopUp").click()])
   
   const allpopupwindows=context.pages();
   console.log("number of pages/windows:" , allpopupwindows.length);
   
   console.log(allpopupwindows[0].url());
   console.log(allpopupwindows[1].url());

   for(const pw of allpopupwindows){
      const title=await pw.title()
      if(title.includes("Playwright")){
         await pw.locator('.getStarted_Sjon').click()
         //PERFORM ANY OTHER ACTIONS
         await pw.close() //this will close playwright popup window
 
      }
   }
   await page.waitForTimeout(5000)
   
   })  


test("authenticated popups",async({browser})=>{

   const context=await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});  
   const page=await context.newPage();

   //1) directly pass login along with url

//    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

   
//    await page.waitForLoadState(); // wait for page loaded completely
   
//    await expect(page.locator('text=Congratulation')).toBeVisible()

//2) pass the login along with browser context
    await page.goto("https://the-internet.herokuapp.com/basic_auth")

    await page.waitForLoadState(); // wait for page loaded completely
   
   await expect(page.locator('text=Congratulation')).toBeVisible()
   await page.waitForTimeout(5000)
})


//Locator & selectors

   test("Using locators",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.getByLabel("Username:").fill("rahulshettyacademy") //using getByLable
    await page.getByLabel("Password:").fill("learning")
    await page.getByRole('button', { name: 'Sign In' }).click() // Using getByRole

   await page.waitForTimeout(5000)
})
