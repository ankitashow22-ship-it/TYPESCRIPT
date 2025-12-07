import { Page, Locator } from '@playwright/test';

export class Google {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly suggestions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator('.gLFyf');
    this.suggestions = page.locator('ul>li'); 
  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }

  async search(text: string) {
    await this.searchBox.fill(text);
  }

  async getSuggestions(): Promise<string[]> {
    const count = await this.suggestions.count();
    const suggestionTexts: string[] = [];
    for (let i = 0; i < count; i++) {
      suggestionTexts.push(await this.suggestions.nth(i).innerText());
    }
    return suggestionTexts;
  }
}
