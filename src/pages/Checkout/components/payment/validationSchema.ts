import * as Yup from "yup";

export const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(16, "Must be exactly 16 digits")
    .max(16, "Must be exactly 16 digits")
    .required("Required"),
  expiryDate: Yup.string()
    .typeError("Not a valid expiration date. Example: MM/YY")
    .max(5, "Not a valid expiration date. Example: MM/YY")
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      "Not a valid expiration date. Example: MM/YY"
    )
    .test(
      "test-credit-card-expiration-date",
      "Invalid Expiration Date has past",
      (expiryDate) => {
        if (!expiryDate) {
          return false;
        }

        const today = new Date();
        const monthToday = today.getMonth() + 1;
        const yearToday = today.getFullYear().toString().substr(-2);

        const [expMonth, expYear] = expiryDate.split("/");

        if (Number(expYear) < Number(yearToday)) {
          return false;
        } else if (
          Number(expMonth) < monthToday &&
          Number(expYear) <= Number(yearToday)
        ) {
          return false;
        }

        return true;
      }
    )
    .test(
      "test-credit-card-expiration-date",
      "Invalid Expiration Month",
      (expiryDate) => {
        if (!expiryDate) {
          return false;
        }

        const [expMonth] = expiryDate.split("/");

        if (Number(expMonth) > 12) {
          return false;
        }

        return true;
      }
    )
    .required("Expiration date is required"),
  securityCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Must be exactly 3 digits")
    .max(3, "Must be exactly 3 digits")
    .required("Required"),
});
