// import { test,expect} from "@playwright/test";
// import fs from 'fs';

// test("screenshots demo ",async({page})=>{

//     await page.goto('https://demowebshop.tricentis.com/');

//     const timestamp=Date.now();
    
//     //page screenshot
//     //await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})

//     //Full page screenshot
//    // await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png',fullPage:true})

//    //element screenshot
//    //const logo= page.locator("img[alt='Tricentis Demo Web Shop']");
//    //logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})

//   // await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'});
  
//    await page.locator('.product-grid.home-page-product-grid').screenshot({path:'screenshots/'+'feature'+timestamp+'.png'});
   
// })
  


// test("screenshots from config",async({page})=>{

//       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//       await page.waitForTimeout(3000)
//       await page.locator('input[name="username"]').fill('Admin');
//       await page.locator('input[name="password"]').fill('admin');
//       await page.locator('button[type="submit"]').click()
  
// })


// test("Single Files Upload ",async({page})=>{

//       await page.goto("https://testautomationpractice.blogspot.com/");

//       await page.locator('#singleFileInput').setInputFiles('uploads/Text1.txt')
//       await page.locator("button:has-text('Upload Single File')").click()
//       const msg=await page.locator('#singleFileStatus').textContent();

//       expect(msg).toContain('Single file selected: Text1.txt, Size: 0 bytes, Type: text/plain');

//       console.log("Upload succesful...");
//       await page.waitForTimeout(5000);
      
// })


// test("Multiple Files Upload ",async({page})=>{

//       await page.goto("https://testautomationpractice.blogspot.com/");

//       await page.locator('#multipleFilesInput').setInputFiles(['uploads/testfile1.pdf','uploads/Text1.txt'])
//       await page.locator("button:has-text('Upload Multiple Files')").click();

//       const msg=await page.locator('#multipleFilesStatus').textContent();

//      expect(msg).toContain('testfile1.pdf');
     // expect(msg).toContain("Multiple files selected: testfile1.pdf, Size: 0 bytes, Type: application/pdf Text1.txt, Size: 0 bytes, Type: text/plain")
//       expect(msg).toContain('testfile1.pdf');
//       expect(msg).toContain("Multiple files selected: testfile1.pdf, Size: 0 bytes, Type: application/pdf Text1.txt, Size: 0 bytes, Type: text/plain")

//       console.log("Upload succesful...");
//       console.log(msg);
//       await page.waitForTimeout(5000);
      
// })

// test("Download Text Files ",async({page})=>{

//       await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

//       await page.locator('#inputText').fill("Welcome") //Filling the text in input box
//       await page.locator('#generateTxt').click(); //Clicking on the 'Generate and Download text file' button

//       //start waiting or the download before clicking
//       const [download]=await Promise.all([
//       page.waitForEvent('download'),
//       page.locator('#txtDownloadLink').click()
//       ])

//       //save the file to custom path
//       const downloadPath='downloads/testfile.txt';
//       await download.saveAs(downloadPath);

//       //Check if file exsists in the path
//       const fileexists=fs.existsSync(downloadPath); //returns true if file exists, not if file not exist
//       expect(fileexists).toBeTruthy();

//       //cleanup downloaded file

//       if(fileexists){
//             fs.unlinkSync(downloadPath);
//       }
// })

// test("Download pdf files ",async({page})=>{

//       await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

//       await page.locator('#inputText').fill("Welcome") //Filling the text in input box
//       await page.locator('#generatePdf').click(); //Clicking on the 'Generate and Download pdf file' button

//       //start waiting for the download before clicking
//       const [download]=await Promise.all([
//       page.waitForEvent('download'),
//       page.locator('#pdfDownloadLink').click()
//       ])

//       //save the file to custom path
//       const downloadPath='downloads/testfile.pdf';
//       await download.saveAs(downloadPath);

//       //Check if file exsists in the path
//       const fileexists=fs.existsSync(downloadPath); //returns true , if file exists, not f file not exist
//       expect(fileexists).toBeTruthy();

//       //cleanup downloaded file
//       // if(fileexists){
//       //       fs.unlinkSync(downloadPath);
//       // }
// })

// test("Single Files Upload Task",async({page})=>{

//       await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

//       await page.locator('#filesToUpload').setInputFiles('uploads/Text1.txt')
//       const msg=await page.locator('#fileList').textContent();

//       expect(msg).toContain('Text1.txt');

//       console.log("Upload succesful...");
//       await page.waitForTimeout(5000);
      
// })
