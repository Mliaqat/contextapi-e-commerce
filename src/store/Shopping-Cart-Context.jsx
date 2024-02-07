import { createContext } from "react";

export const ShoppingCart = createContext({
  items: [],
  addItemToCart: () => {},
  updatedItemQty: () => {},
});
