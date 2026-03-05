// spec: specs/cloudberry-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Wishlist Management', () => {
  test('Verify add to wishlist from product page', async ({ page }) => {
    const productPage = new ProductPage(page);

    // 1. Navigate to product detail page
    await productPage.navigateToProduct(28); // HTC Touch HD
    await expect(page).toHaveURL(/product_id=28/);
    // Expect: Product detail page displays
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    // Expect: Wishlist button (heart icon or similar) is visible
    await expect(productPage.getWishlistButton()).toBeVisible();

    // 2. Click wishlist/heart button
    await productPage.clickWishlistButton();
    
    // Wait for AJAX call to complete
    await page.waitForTimeout(1000);
    
    // Reload page to get updated wishlist count
    await page.reload();
    
    // Expect: Wishlist count updates in header - should show (1)
    await expect(page.getByRole('link', { name: /Wish List \(1\)/ })).toBeVisible();
  });
});
