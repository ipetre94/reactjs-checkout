// all interfaces of the project
// *for bigger projects this file could be split in separated interface files for each component

export interface CheckoutState {
  cartProducts: CartProduct[];
  shippingForm: ShippingFormValues;
  paymentForm: PaymentFormValues;
}

export interface CartProduct {
  id: number;
  name: string;
  description: string;
  quantity: number;
}

export interface CartQuantity {
  indexCartProduct: number;
  quantity: number;
}

export interface ShippingFormValues {
  firstName: string;
  lastName: string;
  zipPostalCode: string;
}

export interface PaymentFormValues {
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
}
