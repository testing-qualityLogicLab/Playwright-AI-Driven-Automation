// spec: specs/cloudberry-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';

test.describe('Shopping Cart Management', () => {
  test('Verify add to cart functionality', async ({ page }) => {
    const productPage = new ProductPage(page);

    // 1. Navigate to product detail page (Samsung Galaxy Tab 10.1)
    await productPage.navigateToProduct(49);
    
    // Product detail page loads with quantity selector showing '1'
    await productPage.verifyQuantity('1');

    // 2. Click 'Add to Cart' button
    await productPage.clickAddToCart();

    // Success message is displayed with product name
    await productPage.verifySuccessAlert();
    
    // Shopping cart badge updates to '1 item(s) - $241.99'
    await productPage.verifyCartBadge('1 item(s) - $241.99');
    
    // Alert contains the product link and shopping cart link
    await productPage.verifyAlertLinks(/Samsung Galaxy Tab/);
  });
});
