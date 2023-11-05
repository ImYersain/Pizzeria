import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import { EmptyCart } from "../../components";
import { Cart } from "./Cart";

import { clearAllItems } from "../../redux/slices/cartSlice";
import { getCartSelector } from "../../redux/selectors/cartSelector";

const CartContainer = () => {
  const { items, totalPrice } = useSelector(getCartSelector);
  const dispatch = useAppDispatch();
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);

  const onClearCart = () => dispatch(clearAllItems());

  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <Cart
      items={items}
      totalPrice={totalPrice}
      totalCount={totalCount}
      onClearCart={onClearCart}
    />
  );
};

export default CartContainer;
