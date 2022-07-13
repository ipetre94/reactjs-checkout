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
import { CheckoutState, PaymentFormValues } from "../../../../utils/Interfaces";
import { isEmpty } from "../../../../utils/isEmpty";

import styles from "./payment.module.css";
import { validationSchema } from "./validationSchema";

// ################## IMPORTANT NOTE: payment contains sensitive data - here I would add a <hashing algorithm> - PCI
export const Payment = () => {
  //#region init store and other data
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { paymentForm } = useSelector<RootState, CheckoutState>(
    (state) => state
  );

  const formRef = useRef<FormikProps<any>>(null);
  //#endregion

  //#region handlers
  const onBack = () => navigate(AppRoutePath.CheckoutShipping);
  const onForward = () => navigate(AppRoutePath.CheckoutConfirmation);

  const onClearForm = (resetForm: any) => {
    dispatch(checkoutActions.clearPaymentForm());
    if (formRef.current != null) {
      formRef.current.resetForm();
    }
  };

  const onSubmit = (values: PaymentFormValues, actions: FormikHelpers<any>) => {
    // can be improved by a custom modal component
    if (window.confirm("Sure?")) {
      dispatch(checkoutActions.savePaymentForm(values));
      actions.setSubmitting(false);
      navigate(AppRoutePath.CheckoutConfirmation);
    }
  };
  //#endregion

  return (
    <>
      <h3>Payment</h3>
      <Formik
        initialValues={paymentForm}
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
              <label htmlFor="cardNumber">Card Number</label>
              <Field
                name="cardNumber"
                className={styles.fullWith}
                placeholder="1234567890123456"
              />
              <ErrorMessage
                name="cardNumber"
                component="div"
                className={styles.validation}
              />
              <label htmlFor="expiryDate">Expiry Date</label>
              <Field
                name="expiryDate"
                className={styles.fullWith}
                placeholder="MM/YY"
              />
              <ErrorMessage
                name="expiryDate"
                component="div"
                className={styles.validation}
              />
              <label htmlFor="securityCode">Security Code</label>
              <Field
                name="securityCode"
                className={styles.fullWith}
                placeholder="123"
              />
              <ErrorMessage
                name="securityCode"
                component="div"
                className={styles.validation}
              />
              <button type="submit">Submit</button>
            </Form>
            <button onClick={onBack}>Back</button>
            <button onClick={onClearForm}>Clear Form</button>
            {isEmpty(paymentForm) && (
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
