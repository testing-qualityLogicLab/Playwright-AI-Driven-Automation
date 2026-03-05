# Cloudberry Store E-Commerce Application Test Plan

## Application Overview

Cloudberry Store is an e-commerce application built on OpenCart that allows customers to browse and purchase electronics and tech products across various categories (Desktops, Laptops, Tablets, Phones, Cameras, etc.). Users can search for products, view detailed product information, manage a shopping cart, access wishlists, and complete checkout. The application includes user account management, product reviews, reward points, and various information pages.

## Test Scenarios

### 1. Homepage and Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage loads with all major components

**File:** `tests/homepage/homepage-load.spec.ts`

**Steps:**
  1. Navigate to https://cloudberrystore.services/
    - expect: Page title displays 'Your store of fun'
    - expect: Store logo is visible
    - expect: Main navigation menu displays 8 product categories (Desktops, Laptops, Components, Tablets, Software, Phones & PDAs, Cameras, MP3 Players)
    - expect: Featured products section is visible with product cards
    - expect: Shopping cart shows '0 item(s) - $0.00'
    - expect: Wishlist shows count '(0)'

#### 1.2. Verify navigation menu category links are functional

**File:** `tests/homepage/category-navigation.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Homepage loads successfully
  2. Click on 'Desktops' category link
    - expect: Page navigates to Desktops category page
    - expect: Category title 'Desktops' is displayed
    - expect: Subcategories (PC, Mac) are shown in expandable menu
  3. Click on 'Laptops & Notebooks' category
    - expect: Page navigates to Laptops & Notebooks category
    - expect: Product listing displays laptops
  4. Click on 'Tablets' category
    - expect: Page navigates to Tablets category
    - expect: Products are displayed

#### 1.3. Verify header elements are accessible

**File:** `tests/homepage/header-elements.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Header contains logo
    - expect: Search textbox is visible and clickable
    - expect: Shopping Cart button shows item count
    - expect: Currency selector displays '$'
    - expect: Top navigation shows Contact link '123456789'
    - expect: Top navigation shows 'My Account' link
    - expect: Top navigation shows 'Wish List (0)' link
    - expect: Top navigation shows 'Checkout' link

### 2. Product Browsing and Searching

**Seed:** `tests/seed.spec.ts`

#### 2.1. Verify search functionality with valid keyword

**File:** `tests/search/search-valid-keyword.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Homepage loads
  2. Click on search textbox and type 'MacBook'
    - expect: Search textbox is active
    - expect: Text 'MacBook' is entered in search box
  3. Press Enter or click search button
    - expect: Page navigates to search results page
    - expect: Page title shows 'Search - MacBook'
    - expect: Heading 'Products meeting the search criteria' is displayed
    - expect: Search results show 3 MacBook products (MacBook, MacBook Air, MacBook Pro)
    - expect: Products display name, description, price, and action buttons

#### 2.2. Verify search with no results

**File:** `tests/search/search-no-results.spec.ts`

**Steps:**
  1. Navigate to search page
    - expect: Search page loads
  2. Search for a non-existent product 'xyzabc123'
    - expect: Search executes
    - expect: No products are displayed or 'No products found' message displayed

#### 2.3. Verify search filter by category

**File:** `tests/search/search-filter-category.spec.ts`

**Steps:**
  1. Navigate to search page with results
    - expect: Search results page loads
  2. Select 'Desktops' from Category dropdown
    - expect: Category filter is applied
    - expect: Only Desktops products are shown in results

#### 2.4. Verify search sort functionality

**File:** `tests/search/search-sort.spec.ts`

**Steps:**
  1. Navigate to search page with results
    - expect: Search results display multiple products
  2. Click 'Sort By' dropdown and select 'Price (Low > High)'
    - expect: Products are re-sorted by price low to high
    - expect: Lowest price product appears first
  3. Select 'Name (A - Z)' from Sort By dropdown
    - expect: Products are sorted alphabetically by name

#### 2.5. Verify product list pagination

**File:** `tests/search/pagination.spec.ts`

**Steps:**
  1. Navigate to a category with multiple products
    - expect: Product listing page loads
    - expect: Products are displayed with pagination info 'Showing 1 to X of Y'
  2. Change 'Show' dropdown from '10' to '25'
    - expect: Page reloads with 25 items per page
    - expect: Pagination updates to reflect new count

### 3. Product Details

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify product detail page displays all information

**File:** `tests/products/product-details-display.spec.ts`

**Steps:**
  1. Navigate to homepage and click on a featured product (e.g., MacBook)
    - expect: Product detail page loads
    - expect: Product name 'MacBook' is displayed
    - expect: Product images carousel is shown with multiple images
    - expect: Product price $602.00 is displayed
    - expect: Ex Tax price $500.00 is shown
    - expect: Availability status 'In Stock' or 'Pre-Order' is shown
    - expect: Brand link is displayed
    - expect: Product Code is shown
    - expect: Reward Points are displayed

#### 3.2. Verify product image gallery functionality

**File:** `tests/products/product-images.spec.ts`

**Steps:**
  1. Navigate to product detail page
    - expect: Main product image is displayed
    - expect: Thumbnail images are shown below main image
  2. Click on a thumbnail image
    - expect: Thumbnail image is highlighted
    - expect: Main image updates to show clicked thumbnail

#### 3.3. Verify product reviews section

**File:** `tests/products/product-reviews.spec.ts`

**Steps:**
  1. Navigate to product detail page
    - expect: Reviews section displays '0 reviews'
    - expect: 'Write a review' link is available
  2. Click on 'Write a review' link
    - expect: Review form is displayed or user is redirected to review page

#### 3.4. Verify product rating display

**File:** `tests/products/product-rating.spec.ts`

**Steps:**
  1. Navigate to product detail page
    - expect: Star rating or rating display is shown for the product

#### 3.5. Verify tabs content - Description and Reviews

**File:** `tests/products/product-tabs.spec.ts`

**Steps:**
  1. Navigate to product detail page
    - expect: Description tab is active by default
    - expect: Product description text is displayed
    - expect: Reviews tab is available
  2. Click on 'Reviews (0)' tab
    - expect: Reviews tab becomes active
    - expect: No reviews message or review list is displayed

### 4. Shopping Cart Management

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify add to cart functionality

**File:** `tests/cart/add-to-cart.spec.ts`

**Steps:**
  1. Navigate to product detail page (Samsung Galaxy Tab 10.1)
    - expect: Product detail page loads with quantity selector showing '1'
  2. Click 'Add to Cart' button
    - expect: Success message 'Success: You have added Samsung Galaxy Tab 10.1 to your shopping cart!' is displayed
    - expect: Shopping cart badge updates to '1 item(s) - $241.99'
    - expect: Close button is available on success message

#### 4.2. Verify shopping cart page displays correct information

**File:** `tests/cart/cart-display.spec.ts`

**Steps:**
  1. Add a product to cart and navigate to Shopping Cart page
    - expect: Shopping Cart page loads
    - expect: Heading 'Shopping Cart (0.00kg)' is displayed
    - expect: Product table shows columns: Image, Product, Quantity, Unit Price, Total
    - expect: Product 'Samsung Galaxy Tab 10.1' is listed with correct price $241.99
    - expect: Subtotal displays $199.99
    - expect: Eco Tax (-2.00) displays $2.00
    - expect: VAT (20%) displays $40.00
    - expect: Total displays $241.99

#### 4.3. Verify update quantity in shopping cart

**File:** `tests/cart/update-quantity.spec.ts`

**Steps:**
  1. Navigate to shopping cart with item
    - expect: Cart page displays with product quantity field showing '1'
  2. Change quantity to '2' in the quantity textbox and click update button
    - expect: Quantity updates to 2
    - expect: Product total updates to $483.98
    - expect: Subtotal, Tax, and Total recalculate

#### 4.4. Verify remove item from shopping cart

**File:** `tests/cart/remove-item.spec.ts`

**Steps:**
  1. Navigate to shopping cart with items
    - expect: Cart page displays with products listed
  2. Click remove button (X icon) for a product
    - expect: Product is removed from cart
    - expect: Cart totals are recalculated
    - expect: If cart is empty, empty cart message is displayed

#### 4.5. Verify empty shopping cart

**File:** `tests/cart/empty-cart.spec.ts`

**Steps:**
  1. Remove all items from shopping cart
    - expect: Cart becomes empty
    - expect: Empty cart message or empty state is displayed
    - expect: Continue Shopping link is available

#### 4.6. Verify coupon code functionality

**File:** `tests/cart/coupon-code.spec.ts`

**Steps:**
  1. Navigate to shopping cart with items
    - expect: 'Use Coupon Code' button is displayed
  2. Click 'Use Coupon Code' button
    - expect: Coupon code input form appears or expands

#### 4.7. Verify estimate shipping functionality

**File:** `tests/cart/estimate-shipping.spec.ts`

**Steps:**
  1. Navigate to shopping cart with items
    - expect: 'Estimate Shipping & Taxes' button is displayed
  2. Click 'Estimate Shipping & Taxes' button
    - expect: Shipping estimation form appears

### 5. Wishlist Management

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify add to wishlist from product page

**File:** `tests/wishlist/add-to-wishlist.spec.ts`

**Steps:**
  1. Navigate to product detail page
    - expect: Product detail page displays
    - expect: Wishlist button (heart icon or similar) is visible
  2. Click wishlist/heart button
    - expect: Product is added to wishlist
    - expect: Wishlist count updates in header
    - expect: Success message may be displayed

#### 5.2. Verify wishlist counter updates

**File:** `tests/wishlist/wishlist-counter.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Wishlist counter shows '(0)'
  2. Add a product to wishlist
    - expect: Wishlist counter updates to show '(1)'

#### 5.3. Verify wishlist page displays items

**File:** `tests/wishlist/wishlist-page.spec.ts`

**Steps:**
  1. Add items to wishlist and click Wishlist link
    - expect: Wishlist page loads
    - expect: Added products are displayed in the wishlist
    - expect: Products show name, image, price, and action buttons

### 6. Product Comparison

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify add to product compare

**File:** `tests/compare/add-to-compare.spec.ts`

**Steps:**
  1. Navigate to product listing page
    - expect: Product list displays with compare button (scale icon) on each product
  2. Click compare button on a product
    - expect: Product is added to comparison
    - expect: Compare counter updates to show product count

#### 6.2. Verify product compare page

**File:** `tests/compare/compare-page.spec.ts`

**Steps:**
  1. Add multiple products to compare and click 'Product Compare' link
    - expect: Compare page loads
    - expect: Selected products are displayed in comparison table
    - expect: Products can be compared by specs and price

### 7. Account Management

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify My Account link is accessible

**File:** `tests/account/my-account-link.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: 'My Account' link is visible in top navigation
  2. Click 'My Account' link
    - expect: User is redirected to account page or login page

#### 7.2. Verify account navigation menu

**File:** `tests/account/account-navigation.spec.ts`

**Steps:**
  1. Navigate to My Account section
    - expect: Account menu displays options: My Account, Order History, Wish List, Newsletter

### 8. Information Pages

**Seed:** `tests/seed.spec.ts`

#### 8.1. Verify footer information links are accessible

**File:** `tests/information/footer-links.spec.ts`

**Steps:**
  1. Navigate to homepage and scroll to footer
    - expect: Footer displays 4 columns: Information, Customer Service, Extras, My Account
    - expect: Information section contains: Terms & Conditions, Delivery Information, About Us, Privacy Policy
    - expect: Customer Service section contains: Contact Us, Returns, Site Map
    - expect: Extras section contains: Brands, Affiliate, Specials

#### 8.2. Verify Terms & Conditions page

**File:** `tests/information/terms-conditions.spec.ts`

**Steps:**
  1. Click 'Terms & Conditions' link in footer
    - expect: Terms & Conditions page loads
    - expect: Page contains terms content

#### 8.3. Verify Delivery Information page

**File:** `tests/information/delivery-information.spec.ts`

**Steps:**
  1. Click 'Delivery Information' link
    - expect: Delivery Information page loads
    - expect: Page contains delivery details

#### 8.4. Verify About Us page

**File:** `tests/information/about-us.spec.ts`

**Steps:**
  1. Click 'About Us' link
    - expect: About Us page loads
    - expect: Page contains store information

#### 8.5. Verify Privacy Policy page

**File:** `tests/information/privacy-policy.spec.ts`

**Steps:**
  1. Click 'Privacy Policy' link
    - expect: Privacy Policy page loads
    - expect: Page contains privacy information

#### 8.6. Verify Contact Us page

**File:** `tests/information/contact-us.spec.ts`

**Steps:**
  1. Click 'Contact Us' link
    - expect: Contact Us page loads
    - expect: Contact form is displayed with fields for messages

#### 8.7. Verify Returns page

**File:** `tests/information/returns.spec.ts`

**Steps:**
  1. Click 'Returns' link
    - expect: Returns page loads
    - expect: Returns form or information is displayed

### 9. Brand and Manufacturer Pages

**Seed:** `tests/seed.spec.ts`

#### 9.1. Verify Brands page displays manufacturer list

**File:** `tests/brands/brands-page.spec.ts`

**Steps:**
  1. Navigate to Brands page via footer link
    - expect: Brands page loads
    - expect: List of manufacturers/brands is displayed
    - expect: Brands include: Apple, Canon, NFL, RedBull, Sony, Starbucks

#### 9.2. Verify clicking brand filters products

**File:** `tests/brands/brand-filter.spec.ts`

**Steps:**
  1. Navigate to Brands page
    - expect: Brands are listed
  2. Click on 'Apple' brand
    - expect: Page navigates to Apple products listing
    - expect: Only Apple products are displayed

### 10. Currency and Localization

**Seed:** `tests/seed.spec.ts`

#### 10.1. Verify currency selector is available

**File:** `tests/localization/currency-selector.spec.ts`

**Steps:**
  1. Navigate to homepage
    - expect: Currency selector button '$ Currency' is visible in top navigation
  2. Click on Currency selector
    - expect: Currency dropdown menu appears with currency options

### 11. Error Handling and Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 11.1. Verify invalid product ID handling

**File:** `tests/errors/invalid-product-id.spec.ts`

**Steps:**
  1. Navigate to a product URL with invalid product ID (e.g., product_id=99999)
    - expect: Page displays error message or redirects to homepage
    - expect: User is informed of invalid product

#### 11.2. Verify handling of out-of-stock products

**File:** `tests/errors/out-of-stock.spec.ts`

**Steps:**
  1. Navigate to a product marked as 'Pre-Order' or out-of-stock
    - expect: Product details display availability status
    - expect: Add to Cart button behavior may be disabled or show different text

#### 11.3. Verify navigation with special characters in search

**File:** `tests/errors/special-characters-search.spec.ts`

**Steps:**
  1. Search for products using special characters (e.g., 'micro@phone')
    - expect: Search executes without error
    - expect: Results display or no results message appears

#### 11.4. Verify empty search query handling

**File:** `tests/errors/empty-search.spec.ts`

**Steps:**
  1. Try to search with empty search field
    - expect: Page either prevents empty search or displays all products

### 12. Performance and Responsive Design

**Seed:** `tests/seed.spec.ts`

#### 12.1. Verify page load performance

**File:** `tests/performance/page-load-time.spec.ts`

**Steps:**
  1. Navigate to homepage and measure load time
    - expect: Page loads within acceptable time (< 5 seconds)
    - expect: All major components are rendered

#### 12.2. Verify product images load correctly

**File:** `tests/performance/image-loading.spec.ts`

**Steps:**
  1. Navigate to product listing page
    - expect: Product images load successfully
    - expect: No broken image icons are displayed

#### 12.3. Verify large product list performance

**File:** `tests/performance/large-list.spec.ts`

**Steps:**
  1. Navigate to category with many products and set 'Show' to 100
    - expect: Page loads all 100 products without freezing
    - expect: Scrolling is smooth
