import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Confirmation } from "../pages/Checkout/components/confirmation/Confirmation";
import { Payment } from "../pages/Checkout/components/payment/Payment";
import { Shipping } from "../pages/Checkout/components/shipping/Shipping";
import { ListProducts } from "../pages/Homepage/components/ListProducts/ListProducts";
import { ErrorPage } from "../pages/Others/ErrorPage";

import { AppRoutePath } from "./AppRoutePath";

// the appRoutes for the app using react router
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutePath.HomePageProducts}
          element={<ListProducts />}
        />
        <Route path={AppRoutePath.CheckoutShipping} element={<Shipping />} />
        <Route path={AppRoutePath.CheckoutPayment} element={<Payment />} />
        <Route
          path={AppRoutePath.CheckoutConfirmation}
          element={<Confirmation />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
