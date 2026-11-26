
## Automated Testing

| Test ID |         Scenario      |                     Actual Result                                           | Status |
|---------|-----------------------|-----------------------------------------------------------------------------|--------|
|   TC01  | Successful checkout   | Order confirmation displayed with a unique reference number.                | PASS   |
|   TC02  | Missing customer name | Validation message displayed and checkout blocked. Cart contents preserved. | PASS   |
|   TC03  | Quantity calculation  | Quantity updated to 3 and order total correctly displayed as ₹1,500.        | PASS   |

### Automated Test Summary

- Total Tests: 3
- Passed: 3
- Failed: 0
- Flaky: 0
- Execution Time: 6.1 seconds

## Manual Testing

| Test ID |      Scenario       |                     Actual Result                                                                  | Status |
|---------|---------------------|----------------------------------------------------------------------------------------------------|--------|
|   MT01  |     Empty cart      | Checkout blocked and appropriate validation message displayed.                                     |  PASS  |

|   MT02  | Rapid double-click  | Only one order confirmation and reference generated. Place Order button disabled after submission. |  PASS  |

## Defect Report

Record any defects discovered during testing.


"No defects were observed in the tested scenarios."

## Screenshots and Evidence

### 1. Empty Cart Validation

![Empty Cart](screenshots/Empty-cart-validation.png)

### 2. Successful Checkout

![Successful Checkout](screenshots/Successful-validation.png)

### 3. Playwright Test Results

![Playwright Results](screenshots/Playwright-test-report.png)

## Conclusion

The checkout application was tested using automated Playwright tests and manual browser testing.

All three automated tests and both manual tests passed. The application correctly handles cart operations, price calculations, input validation and order confirmation while preventing duplicate submissions.

