# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For installation use following scripts: npm install + npm start.

## What I have used

Stack: ReactJS, reduxjs/toolkit for state management, react-router for routing, Formik for creating forms, Yup for validating forms, Mocky (https://designer.mocky.io/) for the mock of APIs.

## Things that can be improved

- UX (here I can use Formik + Material UI - https://formik.org/docs/examples/with-material-ui).
- Unit testing + integration testing.
- Adding different functionalities like removing a product from cart (it's automatically removed if quantity of the product drops to 0) or a text field for quantity.
- Confirm dialog can be improved by a custom modal component.
- Payment contains sensitive data (ex. card number) - here I would add a {hashing algorithm} - PCI for current project. For a real project I can use StripeJS as a third party for payments.

## Known bugs

- Forms for Shipping and Payment are resizing when validation messages appears.