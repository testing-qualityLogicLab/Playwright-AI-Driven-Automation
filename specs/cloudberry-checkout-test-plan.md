# Cloudberry Store Checkout Process Test Plan

## Application Overview

Complete checkout process test plan for Cloudberry Store covering personal details, shipping address, payment selection, order review and confirmation. Tests both registered and guest checkout flows.

## Test Scenarios

### 1. Checkout Page Load

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify checkout page loads with all sections

**File:** `tests/checkout/checkout-loads.spec.ts`

**Steps:**
  1. Navigate to checkout page with items in cart
    - expect: Checkout page title displays
    - expect: All form sections visible
    - expect: Order summary displayed

### 2. Personal Details Section

**Seed:** `tests/seed.spec.ts`

#### 2.1. Fill personal details as registered user

**File:** `tests/checkout/personal-details.spec.ts`

**Steps:**
  1. Navigate to checkout page
    - expect: First Name, Last Name, Email fields visible
    - expect: Register Account option selected by default
  2. Fill: John, Smith, john@example.com
    - expect: Fields display entered values correctly

#### 2.2. Switch to guest checkout mode

**File:** `tests/checkout/guest-checkout.spec.ts`

**Steps:**
  1. Navigate to checkout page
    - expect: Guest Checkout radio option available
  2. Click Guest Checkout option
    - expect: Password field hidden when guest mode selected
    - expect: Personal details fields remain visible

### 3. Shipping Address Section

**Seed:** `tests/seed.spec.ts`

#### 3.1. Complete shipping address form

**File:** `tests/checkout/shipping-address.spec.ts`

**Steps:**
  1. View shipping address section
    - expect: Address 1, City, Post Code, Country, Region fields required
  2. Fill address: 123 Main St, London, SW1A 1AA, United Kingdom, Greater London
    - expect: All fields display entered values

#### 3.2. Select country and region

**File:** `tests/checkout/country-region.spec.ts`

**Steps:**
  1. Click country dropdown
    - expect: Country dropdown shows all countries
  2. Select United Kingdom then verify regions
    - expect: Region options update when country changes
    - expect: Region dropdown shows UK regions for GB selection

### 4. Privacy and Checkout Completion

**Seed:** `tests/seed.spec.ts`

#### 4.1. Accept privacy policy and enable checkout

**File:** `tests/checkout/privacy-and-continue.spec.ts`

**Steps:**
  1. View checkout form
    - expect: Privacy Policy checkbox initially unchecked
    - expect: Newsletter checkbox optional
  2. Accept privacy policy checkbox
    - expect: Continue button disabled initially
    - expect: Becomes enabled after accepting privacy policy
  3. Click Continue button to proceed
    - expect: Continue button is clickable

### 5. Payment and Order Confirmation

**Seed:** `tests/seed.spec.ts`

#### 5.1. Select payment method and confirm order

**File:** `tests/checkout/payment-confirm.spec.ts`

**Steps:**
  1. View payment section
    - expect: Payment Method dropdown visible
    - expect: Comments field available
  2. Check button state
    - expect: Confirm Order button disabled initially
  3. Select payment method
    - expect: Button enabled after payment selection
    - expect: Order summary shows correct totals
  4. Click Confirm Order button
    - expect: Order is processed successfully
    - expect: Confirmation page displays with order number
