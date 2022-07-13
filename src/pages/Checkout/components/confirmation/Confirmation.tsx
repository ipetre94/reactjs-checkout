import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppRoutePath } from "../../../../routes/AppRoutePath";
import { RootState } from "../../../../state";
import { CheckoutState } from "../../../../utils/Interfaces";
import { Product } from "../../../Homepage/components/Product/Product";

export const Confirmation: FunctionComponent = () => {
  //#region init store and other data
  const navigate = useNavigate();
  const checkoutDetails = useSelector<RootState, CheckoutState>(
    (state) => state
  );

  // const {cartProducts, shippingForm, paymentForm} = checkoutDetails;
  const {
    cartProducts,
    shippingForm: { firstName, lastName, zipPostalCode },
    paymentForm: { cardNumber, expiryDate, securityCode },
  } = checkoutDetails;
  //#endregion

  // handler
  const onBack = () => navigate(AppRoutePath.CheckoutPayment);

  return (
    <>
      <h3>Confirmation</h3>
      <br />
      <h5>Products in cart</h5>
      {Array.isArray(cartProducts) &&
        cartProducts.map((cartProduct) => {
          return (
            cartProduct.quantity > 0 && (
              <Product
                key={cartProduct.id}
                product={cartProduct}
                addToCart={false}
              />
            )
          );
        })}
      <h5>Shipping</h5>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Zip Postal Code: {zipPostalCode}</div>
      <h5>Payment</h5>
      <div>Card Number: {cardNumber}</div>
      <div>Expiry Date: {expiryDate}</div>
      <div>Security Code: {securityCode}</div>
      <button onClick={onBack}>Back</button>
    </>
  );
};
