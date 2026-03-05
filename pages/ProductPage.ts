import { Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly baseUrl = 'https://www.cloudberrystore.services/index.php?route=product/product&language=en-gb';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific product by ID
   */
  async navigateToProduct(productId: number) {
    await this.page.goto(`${this.baseUrl}&product_id=${productId}`);
  }

  /**
   * Get the quantity input field
   */
  getQuantityInput() {
    return this.page.locator('#input-quantity');
  }

  /**
   * Verify quantity is set to expected value
   */
  async verifyQuantity(expectedValue: string) {
    await expect(this.getQuantityInput()).toHaveValue(expectedValue);
  }

  /**
   * Set quantity value
   */
  async setQuantity(value: string) {
    await this.getQuantityInput().fill(value);
  }

  /**
   * Click the Add to Cart button
   */
  async clickAddToCart() {
    await this.page.getByRole('button', { name: 'Add to Cart' }).click();
  }

  /**
   * Get the success alert after adding to cart
   */
  getSuccessAlert() {
    return this.page.locator('[class*="alert"]').filter({ hasText: 'Success: You have added' });
  }

  /**
   * Verify success alert is visible
   */
  async verifySuccessAlert() {
    await expect(this.getSuccessAlert()).toBeVisible();
  }

  /**
   * Get product link in success alert
   */
  getProductLinkInAlert(productName: RegExp) {
    return this.getSuccessAlert().getByRole('link', { name: productName });
  }

  /**
   * Get shopping cart link in success alert
   */
  getShoppingCartLinkInAlert() {
    return this.getSuccessAlert().getByRole('link', { name: /shopping cart/ });
  }

  /**
   * Verify both product and shopping cart links are visible in alert
   */
  async verifyAlertLinks(productName: RegExp) {
    await expect(this.getProductLinkInAlert(productName)).toBeVisible();
    await expect(this.getShoppingCartLinkInAlert()).toBeVisible();
  }

  /**
   * Get cart badge showing item count and total
   */
  getCartBadge(expectedText: string) {
    return this.page.getByText(expectedText);
  }

  /**
   * Verify cart badge is updated
   */
  async verifyCartBadge(expectedText: string) {
    await expect(this.getCartBadge(expectedText)).toBeVisible();
  }
}
