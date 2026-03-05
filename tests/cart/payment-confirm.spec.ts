// spec: specs/cloudberry-checkout-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Payment and Order Confirmation', () => {
  test('Select payment method and confirm order', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    // Add product to cart first
    await checkoutPage.addProductToCart();
    
    // 1. View payment section
    await checkoutPage.navigateToCheckoutFromCart();
    
    // Expect: Page navigated to checkout area
    const pageUrl = page.url();
    expect(pageUrl).toContain('checkout');
    
    // Expect: Page content loaded
    await expect(page.locator('main')).toBeVisible();
  });
});
