import { test ,Page} from '@playwright/test';
import { login } from '../pages/login';

test("login using page object", async ({ page }) => {

    const loginPage = new login(page);

    await loginPage.goto();
    await loginPage.login("rahulshettyacademy", "Learning@830$3mK2");

    await loginPage.addProduct(0);
    await loginPage.validateCartCount(1);

    await loginPage.addProduct(1);
    await loginPage.validateCartCount(2);

    await loginPage.goToCheckout();

    await loginPage.removeProduct(1);

    await page.pause();
});
