import { FunctionComponent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppRoutePath } from "../../../../routes/AppRoutePath";
import { checkoutActions, RootState } from "../../../../state";
import { CartProduct, CheckoutState } from "../../../../utils/Interfaces";
import { Product } from "../Product/Product";

import styles from "./listProducts.module.css";

export const ListProducts: FunctionComponent = () => {
  //#region init store and other data
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartProducts } = useSelector<RootState, CheckoutState>(
    (state) => state
  );

  const [allProducts, setAllProducts] = useState<CartProduct[]>([]);

  // we can use useEffect in the same way to get some data from the backend when componentDidMount - mocky for BE as example
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "https://run.mocky.io/v3/b7f22e74-f64a-43f1-863a-a7a4154b6883"
      );
      if (response.status === 200) {
        const data = await response.json();
        setAllProducts(data.products);
      }
    };

    getProducts();
  }, []);
  //#endregion

  //#region handlers
  const onCheckout = () => navigate(AppRoutePath.CheckoutShipping);

  const onEmptyCart = () => dispatch(checkoutActions.clearCartProducts());
  //#endregion

  return (
    <>
      <h3>Home Page</h3>
      {allProducts.map((product) => {
        return <Product key={product.id} product={product} addToCart />;
      })}
      <div>
        {Array.isArray(cartProducts) && cartProducts.length > 0 && (
          <>
            <button className={styles.button} onClick={onEmptyCart}>
              Empty Cart
            </button>
            <button className={styles.button} onClick={onCheckout}>
              Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
};
