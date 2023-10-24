import { IPizza } from "../../../types/index";

export const calcTotalPrice = (items: IPizza[]) => {
  return items.reduce((total, item) => item.price * item.count + total, 0);
};

export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("cartItems");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return { items: items as IPizza[], totalPrice };
};
