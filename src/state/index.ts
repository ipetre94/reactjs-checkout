import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CartProduct,
  CartQuantity,
  CheckoutState,
  PaymentFormValues,
  ShippingFormValues,
} from "../utils/Interfaces";

import { initialCheckoutState } from "./InitialState";

// create a slice for the store
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: initialCheckoutState,
  reducers: {
    saveCartProducts(
      state: CheckoutState,
      action: PayloadAction<CartProduct[]>
    ) {
      state.cartProducts = action.payload;
    },
    updateCartProductQuantity(
      state: CheckoutState,
      action: PayloadAction<CartQuantity>
    ) {
      state.cartProducts[action.payload.indexCartProduct].quantity =
        action.payload.quantity;
    },
    clearCartProducts(state: CheckoutState) {
      state.cartProducts = initialCheckoutState.cartProducts;
    },
    saveShippingForm(
      state: CheckoutState,
      action: PayloadAction<ShippingFormValues>
    ) {
      state.shippingForm = action.payload;
    },
    clearShippingForm(state: CheckoutState) {
      state.shippingForm = initialCheckoutState.shippingForm;
    },
    savePaymentForm(
      state: CheckoutState,
      action: PayloadAction<PaymentFormValues>
    ) {
      state.paymentForm = action.payload;
    },
    clearPaymentForm(state: CheckoutState) {
      state.paymentForm = initialCheckoutState.paymentForm;
    },
  },
});

// configure the store
export const store = configureStore({
  reducer: checkoutSlice.reducer,
});

// get the actions for dispatch
export const checkoutActions = checkoutSlice.actions;

// type for useSelector
export type RootState = ReturnType<typeof store.getState>;
