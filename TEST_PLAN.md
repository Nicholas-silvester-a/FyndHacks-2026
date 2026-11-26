
# Test Plan – Mini Checkout

## Objective

To verify that the checkout application calculates
correct totals, validates customer input and prevents
duplicate order confirmations.

## Test Priorities

| Priority |         Risk           | Testing Focus                                  |
|----------|------------------------|------------------------------------------------|
| High     | Incorrect order total  | Verify quantity changes and price calculations |
| High     | Invalid checkout       | Verify empty cart and missing name validation  |
| High     | Duplicate orders       | Verify rapid double-click handling             |
| Medium   | Incorrect cart updates | Verify adding and removing products            |
| Medium   | Missing confirmation   | Verify successful order confirmation           |

## Automated Tests

|  ID  |                      Test Scenario                           |                   Expected Result                     |
|------|--------------------------------------------------------------|-------------------------------------------------------|
| TC01 | Add a product, enter customer name and place order           | Confirmation displayed with a unique reference number |
| TC02 | Add a product and place order without entering customer name | Validation message displayed and checkout blocked     |
| TC03 | Add a mouse and increase quantity to 3                       | Quantity and total updated correctly to ₹1,500        |

## Manual Tests

|  ID  |                         Test Scenario                         |               Expected Result                          |
|------|---------------------------------------------------------------|--------------------------------------------------------|
| MT01 | Click Place Order without adding products                     | Checkout blocked with an empty cart validation message |
| MT02 | Rapidly double-click Place Order after entering valid details | Only one order confirmation and reference generated    |

## Test Environment

- OS: Windows
- Browser: Chromium
- Testing Framework: Playwright
- Languages: HTML, CSS and JavaScript
- Application: Local checkout page
- Server: Node.js

## Testing Approach

- Automated testing was performed using Playwright.
- Each automated test starts with a clean browser context.
- Assertions verify the actual results displayed to the customer.
- Manual testing was performed to verify empty cart validation and rapid double-click handling.