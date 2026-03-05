// spec: specs/cloudberry-store-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Shopping Cart Management', () => {
  test('Verify update quantity in shopping cart', async ({ page }) => {
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // 1. Navigate to shopping cart with item
    // First, add a product to cart
    await productPage.navigateToProduct(49);
    
    // Click Add to Cart button
    await productPage.clickAddToCart();
    
    // Navigate to shopping cart page
    await cartPage.navigateToCart();
    
    // Verify cart page displays with product quantity field showing '1'
    await cartPage.verifyQuantity('1');

    // 2. Change quantity to '2' in the quantity textbox and click update button
    await cartPage.updateQuantity('2');
    
    // Click update button
    await cartPage.clickUpdateButton();

    // Verify quantity updates to 2
    await cartPage.verifyQuantity('2');
    
    // Verify subtotal recalculates to $399.98 (2 x $199.99)
    await cartPage.verifySubtotal('$399.98');
    
    // Verify total recalculates to $483.98 (includes tax and eco tax)
    await cartPage.verifyTotal('$483.98');
  });
});
