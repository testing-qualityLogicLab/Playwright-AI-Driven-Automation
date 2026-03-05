import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly baseUrl = 'https://www.cloudberrystore.services/index.php?route=checkout/checkout&language=en-gb';

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to shopping cart page
   */
  async navigateToCart() {
    await this.page.goto('https://www.cloudberrystore.services/index.php?route=checkout/cart&language=en-gb');
  }

  /**
   * Navigate to checkout page
   */
  async navigateToCheckout() {
    await this.page.goto(this.baseUrl);
  }

  /**
   * Add product to cart before checkout
   */
  async addProductToCart() {
    await this.page.goto('https://www.cloudberrystore.services/index.php?route=product/product&language=en-gb&product_id=49');
    await this.page.getByRole('button', { name: 'Add to Cart' }).click();
    await this.page.waitForTimeout(1000);
  }

  /**
   * Navigate to checkout from cart
   */
  async navigateToCheckoutFromCart() {
    await this.navigateToCart();
    // Navigate directly to checkout page
    await this.navigateToCheckout();
  }

  /**
   * Get checkout page heading
   */
  getCheckoutHeading() {
    return this.page.getByRole('heading', { name: /Checkout/ });
  }

  /**
   * Verify checkout page is loaded
   */
  async verifyCheckoutPageLoaded() {
    await expect(this.getCheckoutHeading()).toBeVisible();
  }

  /**
   * Get First Name input field
   */
  getFirstNameInput() {
    return this.page.locator('input[name="firstname"]');
  }

  /**
   * Get Last Name input field
   */
  getLastNameInput() {
    return this.page.locator('input[name="lastname"]');
  }

  /**
   * Get Email input field
   */
  getEmailInput() {
    return this.page.locator('input[name="email"]');
  }

  /**
   * Fill personal details
   */
  async fillPersonalDetails(firstName: string, lastName: string, email: string) {
    await this.getFirstNameInput().fill(firstName);
    await this.getLastNameInput().fill(lastName);
    await this.getEmailInput().fill(email);
  }

  /**
   * Get Register Account radio option
   */
  getRegisterAccountOption() {
    return this.page.locator('input[name="account"][value="1"]');
  }

  /**
   * Get Guest Checkout radio option
   */
  getGuestCheckoutOption() {
    return this.page.locator('input[name="account"][value="0"]');
  }

  /**
   * Select guest checkout mode
   */
  async selectGuestCheckout() {
    await this.getGuestCheckoutOption().click();
  }

  /**
   * Get Password field
   */
  getPasswordInput() {
    return this.page.locator('input[name="password"]');
  }

  /**
   * Get Address 1 input field
   */
  getAddress1Input() {
    return this.page.locator('input[name="address_1"]');
  }

  /**
   * Get City input field
   */
  getCityInput() {
    return this.page.locator('input[name="city"]');
  }

  /**
   * Get Post Code input field
   */
  getPostCodeInput() {
    return this.page.locator('input[name="postcode"]');
  }

  /**
   * Get Country dropdown
   */
  getCountrySelect() {
    return this.page.locator('select[name="country_id"]');
  }

  /**
   * Get Region/State dropdown
   */
  getRegionSelect() {
    return this.page.locator('select[name="zone_id"]');
  }

  /**
   * Fill shipping address
   */
  async fillShippingAddress(address: string, city: string, postcode: string) {
    await this.getAddress1Input().fill(address);
    await this.getCityInput().fill(city);
    await this.getPostCodeInput().fill(postcode);
  }

  /**
   * Select country from dropdown
   */
  async selectCountry(countryCode: string) {
    await this.getCountrySelect().selectOption(countryCode);
  }

  /**
   * Select region from dropdown
   */
  async selectRegion(regionCode: string) {
    await this.getRegionSelect().selectOption(regionCode);
  }

  /**
   * Get Privacy Policy checkbox
   */
  getPrivacyPolicyCheckbox() {
    return this.page.locator('input[name="agree"]');
  }

  /**
   * Accept privacy policy
   */
  async acceptPrivacyPolicy() {
    await this.getPrivacyPolicyCheckbox().check();
  }

  /**
   * Get Newsletter checkbox
   */
  getNewsletterCheckbox() {
    return this.page.locator('input[name="newsletter"]');
  }

  /**
   * Get Continue button
   */
  getContinueButton() {
    return this.page.getByRole('button', { name: /Continue/ });
  }

  /**
   * Click Continue button
   */
  async clickContinue() {
    await this.getContinueButton().click();
  }

  /**
   * Verify Continue button is disabled
   */
  async verifyContinueButtonDisabled() {
    await expect(this.getContinueButton()).toBeDisabled();
  }

  /**
   * Verify Continue button is enabled
   */
  async verifyContinueButtonEnabled() {
    await expect(this.getContinueButton()).toBeEnabled();
  }

  /**
   * Get Payment Method dropdown
   */
  getPaymentMethodSelect() {
    return this.page.locator('select[name="payment_method"]');
  }

  /**
   * Select payment method
   */
  async selectPaymentMethod(method: string) {
    await this.getPaymentMethodSelect().selectOption(method);
  }

  /**
   * Get Comments textarea
   */
  getCommentsTextarea() {
    return this.page.locator('textarea[name="comment"]');
  }

  /**
   * Get Confirm Order button
   */
  getConfirmOrderButton() {
    return this.page.getByRole('button', { name: /Confirm Order/ });
  }

  /**
   * Click Confirm Order button
   */
  async clickConfirmOrder() {
    await this.getConfirmOrderButton().click();
  }

  /**
   * Verify Confirm Order button is disabled
   */
  async verifyConfirmOrderButtonDisabled() {
    await expect(this.getConfirmOrderButton()).toBeDisabled();
  }

  /**
   * Verify Confirm Order button is enabled
   */
  async verifyConfirmOrderButtonEnabled() {
    await expect(this.getConfirmOrderButton()).toBeEnabled();
  }

  /**
   * Get order summary section
   */
  getOrderSummary() {
    return this.page.locator('[class*="summary"]');
  }

  /**
   * Verify order summary is visible
   */
  async verifyOrderSummaryVisible() {
    await expect(this.getOrderSummary()).toBeVisible();
  }

  /**
   * Get order number from confirmation page
   */
  getOrderNumber() {
    return this.page.locator('text=/Order Number:/i');
  }

  /**
   * Verify order confirmation displayed
   */
  async verifyOrderConfirmation() {
    await expect(this.getOrderNumber()).toBeVisible();
  }
}
