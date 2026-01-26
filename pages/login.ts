

export class login{
    readonly page:Page;

    constructor(page: Page) {
        this.page = page;

    }
    async goto() {
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }
    async login(user, pass) {
        await this.page.getByLabel("Username:").fill(user)
        await this.page.getByLabel("Password:").fill(pass)
        await this.page.getByRole('button', { name: 'Sign In' }).click()
    }
    
    async addProduct(index) {
        await this. page.locator('.card.h-100 .btn.btn-info').nth(index).click()
    }
    async validateCartCount(count) {
       await expect(this.page.getByText(`Checkout ( ${count} )`)).toBeVisible();
    }
    async goToCheckout() {
        await this.page.getByText('Checkout').click();
    }
    async removeProduct(index) {
       await this.page.locator('.btn.btn-danger').nth(index).click()
    }
}
