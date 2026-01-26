import { Page } from '@playwright/test';

export class Book {

  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://www.makemytrip.com/");
    await this.closePopups();
  }

async closePopups() {
    if (await this.page.getByRole('img', { name: 'minimize' }).isVisible()) {
      await this.page.getByRole('img', { name: 'minimize' }).click();
    }
  
    if (await  this.page.locator('span[data-cy="closeModal"]').isVisible()) {
      await  this.page.locator('span[data-cy="closeModal"]').click();
  }
}
  
 async openFlightsRoundTrip() {
  await this.page.locator('li[data-cy="menu_Flights"]').click();
  await this.closePopups();
  await this.page.locator('.tabsCircle.appendRight5').nth(1).click();
  }

  async setRoute(from: string, to: string) {
    await this.page.locator('#fromCity').click();
    await this.page.getByPlaceholder('From').fill(from);
    await this.page.waitForTimeout(200)
    await this.page.locator('ul[role="listbox"] li').first().click();

    await this.page.locator('#toCity').click();
    await this.page.getByPlaceholder('To').fill(to);
    await this.page.waitForTimeout(200)
    await this.page.locator('ul[role="listbox"] li').first().click();
  }
  
 async setDates() {
   await this.page.locator('.lbl_input.appendBottom10',{hasText: 'Departure'}).click();
   await this.page.locator('[aria-label="Next Month"]').click();
   
   await this.page.locator('div[aria-label="Mon Feb 09 2026"]').click();
   await this.page.locator('div[aria-label="Thu Feb 12 2026"]').click();

}

  async setTravellers(adults: number, travelClass: string) {
    await this.page.locator('.lbl_input.appendBottom5').click();
    await this.page.locator('li[data-cy="adults-2"]').click();
    await this.page.locator('li[data-cy="travelClass-2"]').click();
    await this.page.locator('.primaryBtn.btnApply.pushRight').click();
  }

  async search() {
    await this.page.locator('.primaryBtn.font24.latoBold.widgetSearchBtn').click();
  }
  
}
