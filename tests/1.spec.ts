// import { test,expect,Page, chromium, } from "@playwright/test";


// // test("Browser context demo",async()=>{

// //    const browser=await chromium.launch()   ///create browser
// //    const context=await browser.newContext();  //create context

// //    //creating 2 pages
// //    const page1=await context.newPage();
// //    const page2=await context.newPage();
// //    console.log("no of pages", context.pages().length);
   
// //    await page1.goto("https://testautomationpractice.blogspot.com/")
// //    await expect(page1).toHaveTitle("Automation Testing Practice")

// //     await page2.goto("https://playwright.dev");
// //    await expect(page2).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
// //    await page1.waitForTimeout(5000)
// //    await page2.waitForTimeout(5000)
// // })


// // test("handle tabs",async()=>{

// //    const browser=await chromium.launch()   
// //    const context=await browser.newContext();  
// //    const page=await context.newPage();
// //    await page.goto("https://testautomationpractice.blogspot.com/")

// //    const [childpage] =await  Promise.all([context.waitForEvent('page'), page.locator("button:has-text('New Tab')").click()])
   
// //    //1) switch between pages and get titles(using context)
// //   const pages=context.pages(); //returns array
// //   console.log("Number of pages created" , pages.length);
// //   console.log("title of the pages:",await pages[0].title());
   
// //   //2)alternate
// //   console.log("title of the pages:" , await page.title());
// //   await browser.close();
// // })



// // //multiple popups
// // test("handle popups",async({browser})=>{

// //    const context=await browser.newContext();  
// //    const page=await context.newPage();
// //    await page.goto("https://testautomationpractice.blogspot.com/")
   
// //    await Promise.all([
// //       page.waitForEvent('popup'),
// //       page.locator("#PopUp").click()])
   
// //    const allpopupwindows=context.pages();
// //    console.log("number of pages/windows:" , allpopupwindows.length);
   
// //    console.log(allpopupwindows[0].url());
// //    console.log(allpopupwindows[1].url());

// //    for(const pw of allpopupwindows){
// //       const title=await pw.title()
// //       if(title.includes("Playwright")){
// //          await pw.locator('.getStarted_Sjon').click()
// //          //PERFORM ANY OTHER ACTIONS
// //          await pw.close() //this will close playwright popup window
 
// //       }
// //    }
// //    await page.waitForTimeout(5000)
   
// //    })  


// // test("authenticated popups",async({browser})=>{

// //    const context=await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});  
// //    const page=await context.newPage();

// //    //1) directly pass login along with url

// // //    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

   
// // //    await page.waitForLoadState(); // wait for page loaded completely
   
// // //    await expect(page.locator('text=Congratulation')).toBeVisible()

// // //2) pass the login along with browser context
// //     await page.goto("https://the-internet.herokuapp.com/basic_auth")

// //     await page.waitForLoadState(); // wait for page loaded completely
   
// //    await expect(page.locator('text=Congratulation')).toBeVisible()
// //    await page.waitForTimeout(5000)our Text Here
// // })
// test("Browser context demo",async()=>{

//    const browser=await chromium.launch()   ///create browser
//    const context=await browser.newContext();  //create context

//    //creating 2 pages
//    const page1=await context.newPage();
//    const page2=await context.newPage();
//    console.log("no of pages", context.pages().length);
   
//    await page1.goto("https://testautomationpractice.blogspot.com/")
//    await expect(page1).toHaveTitle("Automation Testing Practice")

//     await page2.goto("https://playwright.dev");
//    await expect(page2).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
//    await page1.waitForTimeout(5000)
//    await page2.waitForTimeout(5000)
// })


// test("handle tabs",async()=>{

//    const browser=await chromium.launch()   
//    const context=await browser.newContext();  
//    const page=await context.newPage();
//    await page.goto("https://testautomationpractice.blogspot.com/")

//    const [childpage] =await  Promise.all([context.waitForEvent('page'), page.locator("button:has-text('New Tab')").click()])
   
//    //1) switch between pages and get titles(using context)
//   const pages=context.pages(); //returns array
//   console.log("Number of pages created" , pages.length);
//   console.log("title of the pages:",await pages[0].title());
   
//   //2)alternate
//   console.log("title of the pages:" , await page.title());
//   await browser.close();
// })


// //multiple popups
// test("handle popups",async({browser})=>{

//    const context=await browser.newContext();  
//    const page=await context.newPage();
//    await page.goto("https://testautomationpractice.blogspot.com/")
   
//    await Promise.all([
//       page.waitForEvent('popup'),
//       page.locator("#PopUp").click()])
   
//    const allpopupwindows=context.pages();
//    console.log("number of pages/windows:" , allpopupwindows.length);
   
//    console.log(allpopupwindows[0].url());
//    console.log(allpopupwindows[1].url());

//    for(const pw of allpopupwindows){
//       const title=await pw.title()
//       if(title.includes("Playwright")){
//          await pw.locator('.getStarted_Sjon').click()
//          //PERFORM ANY OTHER ACTIONS
//          await pw.close() //this will close playwright popup window
 
//       }
//    }
//    await page.waitForTimeout(5000)
   
//    })  


// test("authenticated popups",async({browser})=>{

//    const context=await browser.newContext({httpCredentials:{username:"admin",password:"admin"}});  
//    const page=await context.newPage();

//    //1) directly pass login along with url

// //    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

   
// //    await page.waitForLoadState(); // wait for page loaded completely
   
// //    await expect(page.locator('text=Congratulation')).toBeVisible()

// //2) pass the login along with browser context
//     await page.goto("https://the-internet.herokuapp.com/basic_auth")

//     await page.waitForLoadState(); // wait for page loaded completely
   
//    await expect(page.locator('text=Congratulation')).toBeVisible()
//    await page.waitForTimeout(5000)
// })


// //Locator & selectors

//    test("Using locators",async({page})=>{

//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
//     await page.getByLabel("Username:").fill("rahulshettyacademy") //using getByLable
//     await page.getByLabel("Password:").fill("Learning@830$3mK2")
//     await page.getByRole('button', { name: 'Sign In' }).click() // Using getByRole    
//     await page.locator('.card.h-100 .btn.btn-info').first().click()
//     await page.waitForTimeout(2000)
//     await expect(page.getByText('Checkout ( 1 )')).toBeVisible();
 
//     await page.locator('.card.h-100 .btn.btn-info').nth(1).click()
//     await page.waitForTimeout(2000)
//     await expect(page.getByText('Checkout ( 2 )')).toBeVisible();

//     await page.getByText('Checkout').click();

//    await page.locator('.btn.btn-danger').nth(1).click()

//    await page.pause()
// })



//  test("Booking flights",async({page})=>{

//     await page.goto("https://www.makemytrip.com/")
//     await page.getByRole('img', { name: 'minimize' }).waitFor({ state: 'visible' })
//     await page.getByRole('img', { name: 'minimize' }).click()
//     await page.locator('span[data-cy="closeModal"]').click()
//     await page.locator('.desktop.in').click();
//     await page.locator('li[data-cy="menu_Flights"]').click();
//     await page.locator('.tabsCircle.appendRight5').nth(1).click()
//     await page.locator('.desktop.in').click();
//     await page.locator('#fromCity').click();
//     await page.getByPlaceholder('From').fill('Pune');
//     await page.locator('ul[role="listbox"] li').first().click();

//     await page.locator('#toCity').click();
//     await page.getByPlaceholder('To').fill('Goa');
//     await page.locator('ul[role="listbox"] li').first().click();

   
//     await page.locator('label[for="departure"]').click();
//     await page.getByRole('img', { name: 'minimize' }).waitFor({ state: 'visible' })
//     await page.getByRole('img', { name: 'minimize' }).click()
    
//    //  await page.locator('div[aria-label="Mon Feb 09 2026"]').click();
//    //  await page.locator('div[aria-label="Thu Feb 12 2026"]').click();
//    //  await page.locator('.desktop.in').click();

//    // let checkinYear: string ="2026";
//    // let checkinMonth: string="February"
//    // let checkinDay: string="9"

//    // while(true){
//    //    const checkinMonthYear= await page.locator("div[aria-live='polite']").nth(1).innerText();
//    //    const currentMonth=checkinMonthYear.split(" ")[0]
//    //    const currentYear= checkinMonthYear.split(" ")[1]

//    //    if(currentMonth===checkinMonth&&currentYear===checkinYear){
//    //       break;
//    //    }else{
//    //       await page.locator('button[aria-label="Next Month"]').click()
//    //    }
//    // }
//    // let allDates= await page.locator()
    

//     await page.locator('.lbl_input.appendBottom5').click();
//     await page.locator('li[data-cy="adults-2"]').click();
//     await page.locator('li[data-cy="travelClass-2"]').click();
//     await page.locator('.primaryBtn.btnApply.pushRight').click();

//     await page.waitForTimeout(2000)
//     await page.locator('.primaryBtn.font24.latoBold.widgetSearchBtn').click();



//     await page.locator('.buttonSecondryInvert').click();
    
//     await page.pause()

//  })

//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
//     await page.getByLabel("Username:").fill("rahulshettyacademy") //using getByLable
//     await page.getByLabel("Password:").fill("learning")
//     await page.getByRole('button', { name: 'Sign In' }).click() // Using getByRole

//    await page.waitForTimeout(5000)
// })
