import { createContext, useState, useContext } from "react";
import { DUMMY_PRODUCTS } from "../../../data/dummy-data";

export const CartContext = createContext({
  cartItem: [],
  addItem: () => {},
  updateItem: () => {},
});

export default function CartContextProvider({children}) {
  const CartCtx = useContext(CartContext);
  const [cartItem, setCartItem] = useState(CartCtx.cartItem);

  function handleAddItem(id) {
    setCartItem((prev) => {
      let updatedItems = [...prev];
      const existingItemIndex = updatedItems.findIndex((item) => item.id === id);
      const existingItem = updatedItems[existingItemIndex];
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        const newItemIndex = DUMMY_PRODUCTS.findIndex((item) => item.id === id);
        const newItem = {
          ...DUMMY_PRODUCTS[newItemIndex],
          quantity: 1,
        };
        updatedItems = updatedItems.concat(newItem);
      }
      return updatedItems;
    });
  }

  function handleUpdateItem(id, quantity) {
    setCartItem((prev) => {
      let updatedItems = [...prev];

      if (quantity <= 0) {
        updatedItems = updatedItems.filter((item) => item.id !== id);
        return updatedItems;
      }
      
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      const existingItem = updatedItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: quantity,
      };
      updatedItems[existingItemIndex] = updatedItem;
      return updatedItems;
    });
  }

  const ctxValue = {
    cartItem: cartItem,
    addItem: handleAddItem,
    updateItem: handleUpdateItem,
  };

  return (
    <CartContext.Provider
      value={ctxValue}
    >
      {children}
    </CartContext.Provider>
  );
}