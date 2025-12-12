import {test , expect, Locator} from "@playwright/test";
 
//Text Input
test('Text Input Action',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")

    //   await page.locator('#name').fill('Ankita')
    //   await page.locator('#email').fill('Ankitashow@test.com')
    //   await page.locator('#phone').fill('1234567890')
    //   await page.locator('#textarea').fill('kolkata')

    const textBox: Locator=page.locator('#name');
    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    const maxlength: string | null =await textBox.getAttribute("maxlength"); //return value of maximum length
    expect(maxlength).toBe('15');
     
    await textBox.fill("Ankita");

    //console.log("text content of FirstName :",await textBox.textContent()); //returns empty
    
    const enterValue: string=await textBox.inputValue()
    console.log("Input Value of FirstName :",enterValue);  //returns th input value of text box
    expect(enterValue).toBe("Ankita")

    await page.waitForTimeout(3000)
})

//Radio button
test('Radio button',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")
    
      const maleRadio:Locator= await page.locator('#male')

      await expect(maleRadio).toBeVisible();
      await expect(maleRadio).toBeEnabled();

      expect(await maleRadio.isChecked()).toBe(false);

      await maleRadio.check() //select radio button
      expect(await maleRadio.isChecked()).toBe(true);
      await expect(maleRadio).toBeChecked(); //preferable


      await page.pause()
})

//checkbox actions
test('CheckBox action',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
 /*   
    // 1. Select specific checkbox (Sunday) using getByLabl and assert
      const sundayCheckbox:Locator= page.getByLabel('sunday');
      await sundayCheckbox.check();
      await expect(sundayCheckbox).toBeChecked()
    
*/
    // 2. capture all the checkbox and assert each is checked
      const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
      
      const checkboxes:Locator[]=days.map(index=>page.getByLabel(index));
      expect(checkboxes.length).toBe(7);
    
    // 3. select all checkbox and assert each is checked

   /* for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    
    }
*/
    // 4. uncheck las 3 checkboxs and assert

   /* for(const checkbox of checkboxes.slice(-3)){

        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked()
    }
 */
     
    // 5. Toggle checkboxes: if checked, unchecked; if unchecked, check. Assert state flipped.
        
   /*  for(const checkbox of checkboxes){

        if(await checkbox.isChecked()){ //true
        
        / if checked   
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked()
        }else{

        / if not checked
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000)
*/
    // 6. Randomely select check boxes - Select checkboxes by index(1,3,6)and assert

    /*  const indexes:number[]=[1,3,6];

      for(const i of indexes){
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked()
      }

     */
      // 7. Seelect the checkbox based on the lable

      const weekname:string="Friday";

      for(const lable of days){
        if(lable.toLocaleLowerCase()===weekname.toLocaleLowerCase()){
            const checkbox=page.getByLabel(lable)
            checkbox.check();
            await expect(checkbox).toBeChecked()
        }

      }
    })


//Handle dropdowns
test('Handle Single dropdown',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")

  //1) select option from the dropdown

  //await page.locator('#country').selectOption('India'); //visible text
  //await page.locator('#country').selectOption({value:'uk'}); //by using value attribute
 //await page.locator('#country').selectOption({lable:'India'}); //by using lable 
 //await page.locator('#country').selectOption({index:3}); //by using index
  

 //2)check number of options in the dropdowns

 const dropdown:Locator= page.locator('#country>option')
 await expect(dropdown).toHaveCount(10);
 

 //3) check an option present in the dropdown

 const optionText:string[]=(await dropdown.allInnerTexts()).map(text=>text.trim());
 console.log(optionText)
 
 expect(optionText).toContain('Japan'); //check if the array contains "Japan"


 //4) printing options from the dropdown

 for(const option of optionText){
  console.log(option)

 }
})


test('Handle Multiple dropdown',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")

  //1) select option from the dropdown
  //await page.locator("#colors").selectOption(['Red','Blue','Green']) //using visible text
  //await page.locator("#colors").selectOption(['red','white','green']) //using value 
  //await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]) //using label
  //await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]) //using index    

 //2)check number of options in the dropdowns
 const dropdown:Locator= page.locator('#colors>option')
 await expect(dropdown).toHaveCount(7);
 


 //3) check an option present in the dropdown
 const optionText:string[]=(await dropdown.allInnerTexts()).map(text=>text.trim());
 console.log(optionText)
 
 expect(optionText).toContain('Green'); //check if the array contains "Japan"

 //4) printing options from the dropdown
  for(const option of optionText){
  console.log(option)
 }
})

test('Verify dropdown is sorted ',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")
     
      const dropdown:Locator=page.locator('#animals>option');
      //console.log(await dropdown.allTextContents());

      const optionText:string[]=(await dropdown.allTextContents()).map(text=>text.trim())
      
      const original:string[]=optionText;
      const sort: string[]=optionText.sort()
      console.log("Original: ",original);
      console.log("sort: ",sort);
      
    })

    test('Autosuggest dropdown ',async({page})=>{

      await page.goto("https://www.google.com/")
      await page.locator('.gLFyf').fill('automation testing') //search text
      await page.waitForTimeout(3000);

      const options =page.locator('ul>li')
      const count=await options.count();
      console.log(count);
  
       for(let i=0;i<count;i++){
       console.log(await options.nth(i).innerText());
        
      }

    })


    
    test('Hidden dropdown ',async({page})=>{

      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page.locator('input[name="username"]').fill('Admin');
      await page.locator('input[name="password"]').fill('admin123');
      await page.locator('button[type="submit"]').click()
      
      await page.getByText('PIM').click()
      await page.locator('form i').nth(2).click()
      await page.waitForTimeout(3000)
      
       const options:Locator=await page.locator('div[role="listbox"] span');
       const count=await options.count();
        console.log("Number of option in the dropdown",count);

        for(let i=0;i<count;i++){
          const name=await options.nth(i).innerText()
          console.log(name);
          
        }

        //select/click on particular option
         for(let i=0;i<count;i++){
          const text = await options.nth(i).innerText()
          if(text=="HR Associate"){
           await options.nth(i).click();
           break;
          }
         }
    })


    test('Mouse hove',async({page})=>{

      await page.goto("https://testautomationpractice.blogspot.com/")
      const point= page.locator('.dropbtn')
      await point.hover();
      const laptop= page.locator('.dropdown-content a:nth-child(2)')
      await laptop.hover()

      await page.waitForTimeout(3000)
    })



    
    test('Drag and drop',async({page})=>{

      await page.goto('https://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-3.html#google_vignette')
      const rome= page.locator('#box6')
      const italy= page.locator('#box106')

      await rome.hover()
      await page.mouse.down()
      await italy.hover()
      await page.mouse.up()
     
      await page.waitForTimeout(3000)
    })


       test('Scrolling dropdown',async({page})=>{

      await page.goto('https://demowebshop.tricentis.com/')
   
      const footerText: string = await page.locator('.footer-disclaimer').innerText();
      console.log("Footer text captured:",footerText);
      
      await page.waitForTimeout(3000)
    })

   
    /*
    Keyboard methods:
    insertText
    doeen
    press
    type
    up

    await page.keyboard('key)
    */
    test('Keyboard actions',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")

      const input1= page.locator("#input1");

      //1. focus on input1
      await input1.focus();  //await input1.click()

      //2. provide the text input1
      await page.keyboard.insertText("welcome")

      //3. Ctrl+A - select the text from  input1
      await page.keyboard.down('Control')
      await page.keyboard.press('A')
      await page.keyboard.up('Control')

      //4. Ctrl+C - copy the text from input1
      await page.keyboard.down('Control')
      await page.keyboard.press('C')
      await page.keyboard.up('Control')

      //5. Press TAB - 2 times
      // await page.keyboard.down('Tab')
      // await page.keyboard.up('Tab')
    
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      //6. Ctrl+V - paste the text in input2
      await page.keyboard.down('Control')
      await page.keyboard.press('V')
      await page.keyboard.up('Control')

      //7. Press TAB - 2 times
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      //8.  Ctrl+V - paste the text in input2
      await page.keyboard.down('Control')
      await page.keyboard.press('V')
      await page.keyboard.up('Control')

      await page.waitForTimeout(5000)
})


test('Keyboard actions - simple way',async({page})=>
{
      await page.goto("https://testautomationpractice.blogspot.com/")

      const input1= page.locator("#input1");

      //1. focus on input1
      await input1.focus();  //await input1.click()

      //2. provide the text input1
      await page.keyboard.insertText("welcome")

      //3. Ctrl+A - select the text from  input1

      await page.keyboard.press('Control+A')

      //4. Ctrl+C - copy the text from input1
       await page.keyboard.press('Control+C')

      //5. Press TAB - 2 times
      // await page.keyboard.down('Tab')
      // await page.keyboard.up('Tab')
    
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      //6. Ctrl+V - paste the text in input2
      await page.keyboard.press('Control+V')

      //7. Press TAB - 2 times
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      //8.  Ctrl+V - paste the text in input2
      await page.keyboard.press('Control+V')
      await page.waitForTimeout(5000)
})


