import {test , expect, Locator} from "@playwright/test";
 

test('Autowaitings and forcing ',async({page})=>
{
     test.setTimeout(60000);
    //test.slow(); // 90 secs (default is 30 secs)

    
      await page.goto("https://demowebshop.tricentis.com/")

     //Assertions- Auto waits works
      await expect(page).toHaveURL('https://demowebshop.tricentis.com/',{timeout:10000});
      await expect(page.locator('text= Welcome to our store')).toBeVisible({timeout:10000});
 
      //Actions- Auto wait  works
      await page.locator('#small-searchterms').fill("Laptop",{force:true}); //it will not do actinalibity check- force action
      await page.locator('.button-1.search-box-button').click();
})





test('Autowaiting ',async({page})=>{
  // Navigate to Demo Web Shop
  await page.goto('https://demowebshop.tricentis.com');

  // Wait for the page to fully load (network idle)
  await page.waitForLoadState('networkidle');
  console.log('Page fully loaded!');

  // Wait for the search box to appear
  await page.waitForSelector('input[name="q"]');

  // Type a product name into the search box
  await page.fill('input[name="q"]', 'Laptop');

  // Click the search button
  await page.click('input[value="Search"]');

  // Wait for search results to load
  await page.waitForSelector('.product-item');
  console.log('Search results are visible!');

 
});



  test('Autowait ',async({page})=>{
  await page.goto('https://demowebshop.tricentis.com');

  test.setTimeout(60000); // Increase timeout to 60s


  // Wait for page to fully
  await page.waitForLoadState('networkidle');
  console.log('Page fully loaded!');

  // Wait for the search box and search for "Laptop"
  await page.waitForSelector('input[name="q"]', { state: 'visible' });
  await page.locator('input[name="q"]').fill('Laptop');
  await page.locator('input[value="Search"]').click();

  // Wait for search results
  await page.waitForSelector('.product-item', { state: 'visible' });
  console.log('Search results loaded!');

  // Click on the first product link
  const firstProduct = page.locator('.product-item .product-title a').first();
  await firstProduct.click();

  // Wait for product details page to load
  await page.waitForLoadState('domcontentloaded');

  // Wait for "Add to cart" button and click it
  await page.waitForSelector('input[value="Add to cart"]', { state: 'visible' });
  await page.click('input[value="Add to cart"]')

  test.setTimeout(60000); // Increase timeout to 60s

  // Wait for confirmation message
  await page.waitForSelector('.bar-notification.success', { state: 'visible' });
  console.log('Product added to cart successfully!');


});
