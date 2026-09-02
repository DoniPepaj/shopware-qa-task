# Shopware 6 QA Automation Task

## Overview

This project contains a QA automation test for the Shopware 6 storefront.

The test automates a complete guest checkout flow using Cypress.

## Technology

- Cypress
- JavaScript
- Node.js

## Target Environment

Shopware 6 Demo Store:

https://www.shopware6-demo.development-s25.com/

## Automated Test

The automated test covers the following flow:

1. Open the Shopware 6 storefront
2. Search for a product
3. Add the product to the shopping cart
4. Open the shopping cart
5. Proceed to checkout
6. Fill in guest customer information
7. Select Cash on Delivery
8. Accept the terms and conditions
9. Confirm the order
10. Verify the order confirmation page

## Project Structure

```text
shopware-qa-task/
├── cypress/
│   └── e2e/
│       └── guest-checkout.cy.js
├── package.json
├── package-lock.json
└── README.md
```
