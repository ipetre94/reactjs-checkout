import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { checkoutActions, RootState } from "../../../../state";
import { CartProduct, CheckoutState } from "../../../../utils/Interfaces";

import styles from "./product.module.css";

interface ProductProps {
  product: CartProduct;
  addToCart: boolean;
}

export const Product: FunctionComponent<ProductProps> = ({
  product,
  addToCart,
}) => {
  //#region init store and other data
  const dispatch = useDispatch();

  let { cartProducts } = useSelector<RootState, CheckoutState>(
    (state) => state
  );
  const indexCartProduct = cartProducts.findIndex(
    (cartProduct) => cartProduct.id === product.id
  );
  const quantity =
    typeof cartProducts[indexCartProduct] === "undefined"
      ? 0
      : cartProducts[indexCartProduct].quantity;
  //#endregion

  // handler
  const onIncrementQuantity = () => {
    //#region increase the quantity of the product when add to cart is pressed
    if (indexCartProduct > -1) {
      dispatch(
        checkoutActions.updateCartProductQuantity({
          indexCartProduct,
          quantity: quantity + 1,
        })
      );
    } else {
      cartProducts = [...cartProducts, { ...product, quantity: 1 }];
      dispatch(checkoutActions.saveCartProducts(cartProducts));
    }
    //#endregion
  };

  const onDecreaseQuantity = () => {
    dispatch(
      checkoutActions.updateCartProductQuantity({
        indexCartProduct,
        quantity: quantity - 1,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div>{product.name}</div>
      <div>{product.description}</div>
      {addToCart && (
        <>
          {quantity > 0 && (
            <button className={styles.button} onClick={onDecreaseQuantity}>
              -
            </button>
          )}
          <button className={styles.button} onClick={onIncrementQuantity}>
            +
          </button>
        </>
      )}
      <div>{quantity}</div>
    </div>
  );
};
