import { test,expect  } from '@playwright/test';

 //test.describe.configure({mode:'serial'})
 //test.describe.configure({mode:'parallelclear'})


  test.describe('group',() =>{
    test('Test1',async({page})=>{
        console.log("this is test1...........");
        
    });

    test('Test2',async({page})=>{
        console.log("this is test2...........");
    
  });

    test('Test3',async({page})=>{
        console.log("this is test3...........");
        
    });

    test('Test4',async({page})=>{
        console.log("this is test4...........");
    });    
});

//Grouping
    test('Test1',async({page})=>{
        console.log("this is test1...........");
        
    });

    test('Test2',async({page})=>{
        console.log("this is test2...........");
    
  });

    test('Test3',async({page})=>{
        console.log("this is test3...........");
        
    });

    test('Test4',async({page})=>{
        console.log("this is test4...........");
    });    



// test.only("nopCommerse", async ({page}) =>{

//   await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

//   await page.locator('#gender-male').click()
//   await page.locator('#FirstName').fill("ankita")
//   await page.locator('#LastName').fill("show")
//   await page.locator('#Email').fill("show@gmail.com")
//   await page.locator('#Company').fill("xyzcompzny")
//   await page.locator('#Password').fill("xyzcompzny")
//   await page.locator('#ConfirmPassword').fill("xyzcompzny")
//   await page.getByRole('button',{name:'Register'}).click()
 
//   page.pause();
// })
 

 
// test("Angular application",async ({page}) =>{

//   await page.goto("https://demo.akveo.com/ngx-admin/themes")
//   await page.locator('img[alt="Material Light Theme"]').click()
//   await page.getByText('Forms').click();
//   await page.getByText('Form Layouts').click()
 
//   await page.locator('nb-card :text-is("Option 1")').click()
//   await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
//   await page.getByRole('button',{name:'sign in'}).first().click()
//   await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button').click()
//   await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button',{name:'Sign in'}).click()
//   await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('button').click()
//   await page.locator('nb-card', {has:page.locator('.status-danger')}).click()
//   await page.locator('nb-card', {has:page.locator('nb-checkbox')}).filter({hasText:'Sign in'})
//   await page.locator(':text-is("Using the Grid")')
//   await page.locator('text=Using the Grid')
//   await page.getByText("Using the Grid").locator('..').getByRole('textbox',{name:'Email'})
 
//   const basicForm = page.locator('nb-card',{hasText:'Basic form'})
//   await basicForm.getByRole('textbox', {name:'Email'}).fill("showr@gmail.com")
//   await basicForm.getByRole('textbox', {name:'Password'}).fill("show1234")
 
 
//   page.pause()
// })
 