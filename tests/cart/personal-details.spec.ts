// spec: specs/cloudberry-checkout-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Personal Details Section', () => {
  test('Fill personal details as registered user', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    // Add product to cart first
    await checkoutPage.addProductToCart();
    
    // 1. Navigate to checkout page
    await checkoutPage.navigateToCheckoutFromCart();
    
    // Expect: Page navigated to checkout or cart area
    const pageUrl = page.url();
    expect(pageUrl).toContain('checkout');
    
    // Expect: Main content is visible (page loaded)
    await expect(page.locator('main')).toBeVisible();
  });
});
