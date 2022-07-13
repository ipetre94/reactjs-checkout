import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .max(40)
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .max(40)
    .required("Required"),
  zipPostalCode: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(6, "Must be exactly 6 digits")
    .max(6, "Must be exactly 6 digits")
    .required("Required"),
});
