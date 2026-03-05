import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly baseUrl = 'https://www.cloudberrystore.services/index.php?route=checkout/cart&language=en-gb';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to the shopping cart page
   */
  async navigateToCart() {
    await this.page.goto(this.baseUrl);
  }

  /**
   * Get the quantity input field
   */
  getQuantityInput() {
    return this.page.locator('input[name="quantity"]');
  }

  /**
   * Verify quantity has expected value
   */
  async verifyQuantity(expectedValue: string) {
    await expect(this.getQuantityInput()).toHaveValue(expectedValue);
  }

  /**
   * Update quantity to a new value
   */
  async updateQuantity(newQuantity: string) {
    await this.getQuantityInput().fill(newQuantity);
  }

  /**
   * Click the Update button to apply quantity changes
   */
  async clickUpdateButton() {
    await this.page.getByTitle('Update').click();
  }

  /**
   * Get the subtotal cell value
   */
  async getSubtotalValue() {
    return this.page
      .getByRole('cell')
      .filter({ hasText: /^Sub-Total/ })
      .evaluate(el => el.nextElementSibling?.textContent?.trim());
  }

  /**
   * Verify subtotal displays expected value
   */
  async verifySubtotal(expectedValue: string) {
    // Use original working approach: check if the subtotal row contains the expected value
    const subtotalRow = this.page.getByRole('row', { name: /Sub-Total/ });
    const subtotalCell = this.page.locator('table tr').filter({ hasText: 'Sub-Total' }).locator('td').last();
    await expect(subtotalCell).toContainText(expectedValue);
  }

  /**
   * Get the total cell value
   */
  async getTotalValue() {
    return this.page
      .getByRole('cell', { name: /\$\d+\.\d{2}/ })
      .first()
      .textContent();
  }

  /**
   * Verify total displays expected value
   */
  async verifyTotal(expectedValue: string) {
    // Find the Total row and verify the value is visible
    const totalText = expectedValue.replace('$', '\\$');
    await expect(this.page.getByText(new RegExp(totalText)).first()).toBeVisible();
  }

  /**
   * Get cart heading
   */
  getCartHeading() {
    return this.page.getByRole('heading', { name: /Shopping Cart/ });
  }

  /**
   * Verify cart page is loaded
   */
  async verifyCartPageLoaded() {
    await expect(this.getCartHeading()).toBeVisible();
  }

  /**
   * Get product row in cart
   */
  getProductRow(productName: string) {
    return this.page
      .getByRole('row')
      .filter({ hasText: productName });
  }

  /**
   * Verify product is in cart
   */
  async verifyProductInCart(productName: string) {
    await expect(this.getProductRow(productName)).toBeVisible();
  }

  /**
   * Get remove button for a product
   */
  getRemoveButton() {
    return this.page.locator('a[href*="cart.remove"]').first();
  }

  /**
   * Click remove button to remove product from cart
   */
  async clickRemoveButton() {
    await this.getRemoveButton().click();
  }

  /**
   * Get VAT value
   */
  async getVATValue() {
    return this.page
      .getByRole('row', { name: /VAT/ })
      .getByRole('cell')
      .last()
      .textContent();
  }

  /**
   * Get Eco Tax value
   */
  async getEcoTaxValue() {
    return this.page
      .getByRole('row', { name: /Eco Tax/ })
      .getByRole('cell')
      .last()
      .textContent();
  }
}
