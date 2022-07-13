import { CheckoutState } from "../utils/Interfaces";

import {
  initialCartProducts,
  initialPaymentFormValues,
  initialShippingFormValues,
} from "./InitialValues";

// initial state fir checkout slice
export const initialCheckoutState: CheckoutState = {
  cartProducts: initialCartProducts,
  shippingForm: initialShippingFormValues,
  paymentForm: initialPaymentFormValues,
};
