import { FormikHelpers } from "formik";

import { ShippingFormValues } from "./Interfaces";

export const useConfirm = (
  message: string,
  onConfirm: any,
  onAbort: any,
  values: ShippingFormValues,
  actions: FormikHelpers<any>
) => {
  const confirm = () => {
    if (window.confirm(message)) onConfirm();
    else onAbort();
  };
  return confirm;
};
