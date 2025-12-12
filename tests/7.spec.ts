import { test,expect} from "@playwright/test";
import { log } from "node:console";


test("Simple Dialog ",async({page})=>{
   
   await page.goto("https://testautomationpractice.blogspot.com/")

   //Enable alert handling
   page.on('dialog', (dialog) => {
    console.log('Dialog type is:',dialog.type());  //returns type of the dialog
    expect(dialog.type()).toContain('alert');
    console.log('Dialog Text:',dialog.message());  //returns message from dialog
    expect(dialog.message()).toContain('I am an alert box!');
    dialog.accept();
   })

   await page.locator('#alertBtn').click()  //opens dialog

   await page.waitForTimeout(5000)
})


test("Confirmation Alert ",async({page})=>{
   
   await page.goto("https://testautomationpractice.blogspot.com/")

   //Enable alert handling
   page.on('dialog', (dialog) => {
    console.log('Dialog type is:',dialog.type());  //returns type of the dialog
    expect(dialog.type()).toContain('confirm');
    console.log('Dialog Text:',dialog.message());  //returns message from dialog
    expect(dialog.message()).toContain('Press a button!');
    //dialog.accept(); //close dialog by accepting
    dialog.dismiss(); //close dialog by dismissing
   })

   await page.locator('#confirmBtn').click()  //opens confirmation dialog
   const text:string=await page.locator('#demo').innerText();
   console.log('Output texts: ',text);

   await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
   await page.waitForTimeout(5000)
})


test("prompt Alert ",async({page})=>{
   
   await page.goto("https://testautomationpractice.blogspot.com/")

   //Enable alert handling
   page.on('dialog', (dialog) => {
    console.log('Dialog type is:',dialog.type());  //returns type of the dialog
    expect(dialog.type()).toContain('prompt');
    console.log('Dialog Text:',dialog.message());  //returns message from dialog
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter'); //checks default vaue of the dialog

    dialog.accept('John'); //close dialog by accepting
    //dialog.dismiss(); //close dialog by dismissing
   })

   await page.locator('#promptBtn').click()  //opens prompt dialog
   const text:string=await page.locator('#demo').innerText();
   console.log('Output texts: ',text);
   await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?');
   await page.waitForTimeout(5000)
})


test("frames demo",async({page})=>{
   
   await page.goto("https://ui.vision/demo/webtest/frames/");
  
   //total number of frames present on the page.
   const frames=page.frames();
   console.log("Number of frames",frames.length);

   //Approach 1: using page.frame()
   //const frame= page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_1.html'});
   
//    if(frame)
//     {
//     await frame.locator('input[name="mytext1"]').fill('Hello');
//     //await frame.fill('input[name="mytext1"]','Hello');
//    }
//    else{
//     console.log('Frame is not available');
//    }
   

   //Approach-2: Using frameloactor
   const inputbox= page.frameLocator("[src='frame_1.html']").locator('name="mytext1"');
   await inputbox.fill('John');
   
});


test("inner/child frames demo",async({page})=>{
   
   await page.goto("https://ui.vision/demo/webtest/frames/");
  
   const frame3= page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'});
   
   if(frame3){
   await frame3.locator("name=['mytext3']").fill("Welcome");
    const childframes=frame3.childFrames();
    console.log(childframes.length);
    const radio=childframes[0].getByLabel("I am a human");
    await radio.check(); //select radio button
    await expect(radio).toBeChecked()
    
   }else{
    console.log("Frame 3 is not found"); 
   }

});

