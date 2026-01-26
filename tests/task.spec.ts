// // googleSearch.spec.ts
// import { test } from '@playwright/test';
// import { Google } from '../pages/task';

// test('Autosuggest dropdown', async ({ page }) => {
//   const googleSearch = new Google(page);

//   await googleSearch.goto();
//   await googleSearch.search('automation testing');
//   await page.waitForTimeout(3000);

//   const suggestions = await googleSearch.getSuggestions();
//   console.log(`Total suggestions: ${suggestions.length}`);
//   console.log('Suggestions:', suggestions);
// });
