import {
  CartProduct,
  PaymentFormValues,
  ShippingFormValues,
} from "../utils/Interfaces";

// initial values for cartProducts
export const initialCartProducts: CartProduct[] = [];

// initial values for shippingFormValues
export const initialShippingFormValues: ShippingFormValues = {
  firstName: "",
  lastName: "",
  zipPostalCode: "",
};

// initial values for paymentFormValues
export const initialPaymentFormValues: PaymentFormValues = {
  cardNumber: "",
  expiryDate: "",
  securityCode: "",
};
