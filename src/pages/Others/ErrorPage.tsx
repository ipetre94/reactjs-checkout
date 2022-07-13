import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

import { AppRoutePath } from "../../routes/AppRoutePath";

export const ErrorPage: FunctionComponent = () => {
  const navigate = useNavigate();

  // handler
  const onGoToHomePage = () => navigate(AppRoutePath.HomePageProducts);

  return (
    <>
      <p>This page was not fond</p>
      <button onClick={onGoToHomePage}>Go to Home page</button>
    </>
  );
};
