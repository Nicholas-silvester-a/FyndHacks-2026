# Mini Checkout and Browser Test Suite

## Project Description

A simple single-page checkout application built using
HTML, CSS and JavaScript.

It allows customers to add and remove products,
change quantities, view order totals and place orders with customer details.

Playwright is used to automate browser testing and verify the checkout process..

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Playwright
- Chromium

## Products

| Product        | Price  |
| -------------- | ------ |
| Wireless Mouse | ₹500   |
| Keyboard       | ₹1,000 |

##Features

Add and remove products from the cart.

Increase and decrease product quantities.

Automatically calculate line totals and order total.

Validate empty cart and missing customer name.

Display order confirmation with a unique reference number.

Prevent duplicate order submissions.

## Setup Instructions

Prerequisites
1.Node.js installed on your system.
2.Visual Studio or any code editor.

Installation

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install dependencies:

   npm install

4. Install Chromium:

   npx playwright install chromium

## Run the Application

Execute:

node server.cjs

Open:

http://localhost:4173

## Run Automated Browser Tests

Execute:

npx playwright test

## View Test Report

Execute:

npx playwright show-report

## Automated Test Cases

1. Successful checkout and confirmation.
2. Checkout validation when customer name is missing.
3. Exact order total after quantity change.

## Manual Test Cases

1. Empty cart validation.
2. Rapid double-click during order placement.

## Limitations

- No backend or database.
- No real payment processing.
- Products and prices are predefined.
- Order information is not persisted.
  -The application is designed for demonstration and testing purposes.
