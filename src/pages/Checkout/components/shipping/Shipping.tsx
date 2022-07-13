import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppRoutePath } from "../../../../routes/AppRoutePath";
import { checkoutActions, RootState } from "../../../../state";
import {
  CheckoutState,
  ShippingFormValues,
} from "../../../../utils/Interfaces";
import { isEmpty } from "../../../../utils/isEmpty";

import styles from "./shipping.module.css";
import { validationSchema } from "./validationSchema";

export const Shipping = () => {
  //#region init store and other data
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { shippingForm } = useSelector<RootState, CheckoutState>(
    (state) => state
  );

  const formRef = useRef<FormikProps<any>>(null);
  //#endregion

  //#region handlers
  const onBack = () => navigate(AppRoutePath.HomePageProducts);
  const onForward = () => navigate(AppRoutePath.CheckoutPayment);

  const onClearForm = (resetForm: any) => {
    dispatch(checkoutActions.clearShippingForm());
    if (formRef.current != null) {
      formRef.current.resetForm();
    }
  };

  const onSubmit = (
    values: ShippingFormValues,
    actions: FormikHelpers<any>
  ) => {
    // can be improved by a custom modal component
    if (window.confirm("Sure?")) {
      dispatch(checkoutActions.saveShippingForm(values));
      actions.setSubmitting(false);
      navigate(AppRoutePath.CheckoutPayment);
    }
  };
  //#endregion

  return (
    <>
      <h3>Shipping</h3>
      <Formik
        initialValues={shippingForm}
        innerRef={formRef}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
        }}
        // these are the validation rules for the fields of the form
        validationSchema={validationSchema}
      >
        {() => (
          <>
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field
                name="firstName"
                className={styles.fullWith}
                placeholder="Iulian"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={styles.validation}
              />
              <label htmlFor="lastName">Last Name</label>
              <Field
                name="lastName"
                className={styles.fullWith}
                placeholder="Petre"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className={styles.validation}
              />
              <label htmlFor="zipPostalCode">Zip Postal Code</label>
              <Field
                name="zipPostalCode"
                className={styles.fullWith}
                placeholder="123456"
              />
              <ErrorMessage
                name="zipPostalCode"
                component="div"
                className={styles.validation}
              />
              <button type="submit">Submit</button>
            </Form>
            <button onClick={onBack}>Back</button>
            <button onClick={onClearForm}>Clear Form</button>
            {isEmpty(shippingForm) && (
              <>
                <button onClick={onForward}>Forward</button>
              </>
            )}
          </>
        )}
      </Formik>
    </>
  );
};
