// import {test , expect, Page,Locator} from "@playwright/test";
 
//    test.beforeAll('BeforeAll',async()=>{
//     console.log('This is Before All');
    
//    })

   
//    test.afterAll('AftereAll',async()=>{
//     console.log('This is After All');
    
//    })


//    test.beforeEach('Beforeeach',async()=>{

//     console.log("this is before each");
    
//    })

//     test.afterEach('Aftereach',async()=>{

//     console.log("this is After each");
    
//    })

 
//     test('Test1',async({page})=>{
//         console.log("this is test1...........");
//     });

//     test('Test2',async({page})=>{
//         console.log("this is test2...........");
//   });

//     test('Test3',async({page})=>{
//         console.log("this is test3..........."); 
//     });

//     test('Test4',async({page})=>{
//         console.log("this is test4...........");
//     });    
  

//     /*
//     open app -- beforeAll()

//     login
//        find products
//     logout -- aftereach()
    
//     login
//        add product to cart
//     logout
    
//     close app -- afterAll()

//     */
   
//     let page:Page;
    
//     test.beforeAll('Open app',async({browser})=>{
//          page=await browser.newPage();
//         await page.goto('https://www.nop-station.com/')
//     })


//     test.afterAll('Closing app',async()=>{
//         await page.close();
//     })

//     test.beforeEach('Login',async()=>{
//         await page.locator('.user-dropdown-menu').click();

//         await page.locator('input[class="email"]').fill('ankita987@test.com');
//         await page.locator('input[class="password"]').fill('asdfghjkl');
//         await page.locator('button[type="submit"]').click()
//         await page.waitForTimeout(2000)
//     })
//

// //Annotation

// /* 
// only
// skip
// fail
// fixme
// slow
// */

// test.skip('Test1',async({page})=>{
//     await page.goto('https://www.google.com/');
//     await expect(page).toHaveTitle('Google');

// })

// //only
// test('Test2',async({page})=>{
//     await page.goto('https://www.google.com/');
//     await expect(page).toHaveTitle('Google');

// })

// //skip- based on the condition
// test('Test3',async({page,browserName})=>{
//     test.skip(browserName==='firefox','this test skipped if browser is firefox')
//     await page.goto('https://www.google.com/');
//     await expect(page).toHaveTitle('Google');

// })

// //fail
// test.fail('Test4',async({page})=>{
//     await page.goto('https://www.google.com/');
//     await expect(page).toHaveTitle('Google');

// })

// //fixme
// test.fixme('Test5',async({page})=>{
//     await page.goto('https://www.google.com/');
//    //No assertion
// })

// //slow
// test('Test6',async({page})=>{
//     test.slow(); //triple the default timeout
//     await page.goto('https://www.google.com/');
//     await expect(page).toHaveTitle('Google');

// })

