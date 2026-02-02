
import { test } from '@playwright/test';
import { Book } from '../pages/Book';



test('Booking flight tickets', async ({ page }) => {

  const mmt = new Book(page);

  await mmt.goto();

  await mmt.openFlightsRoundTrip();

  await mmt.setRoute('Pune', 'Goa'); 

  await mmt.setDates();

  // await mmt.selectDepartureDate();

  // await mmt.selectReturnDate()

  await mmt.setTravellers(2, 'business');
  
  await mmt.search();

  await page.pause();
});
