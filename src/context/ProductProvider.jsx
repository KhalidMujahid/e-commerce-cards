import { createContext, useState } from "react";
import { getSingleProduct } from "../services/product";

export const Context = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  increaseQuatity: () => {},
  decreaseQuatity: () => {},
});

export const ProductProvider = ({ children }) => {
  const [store, setStore] = useState([]);

  const addToCart = (id) => {
    // get Product from the Store (DB)
    const product = getSingleProduct(id);
    if (product) {
      const alreadyInStore = store.find((st) => st.id === product.id);
      if (alreadyInStore) {
        setStore(
          store.map((st) =>
            st.id === product.id ? { ...st, qua: st.qua + 1 } : st
          )
        );
      } else {
        // add quatity of 1 to the product and save to the store
        const qua = { ...product, qua: 1 };
        setStore((prev) => [...prev, qua]);
      }
    }
  };

  const removeFromCart = (id) => {
    // find the product by ID from the cart and remove it
    const products = store.filter((product) => product.id !== id);
    setStore([...products]);
  };

  const clearCart = () => {
    setStore([]);
  };

  const increaseQuatity = (id) => {
    const product = getSingleProduct(id);
    if (product) {
      setStore(
        store.map((st) =>
          st.id === product.id ? { ...st, qua: st.qua + 1 } : st
        )
      );
    } else {
      return null;
    }
  };

  const decreaseQuatity = (id) => {
    const product = getSingleProduct(id);
    if (product) {
      setStore(
        store.map((st) =>
          st.id === product.id ? { ...st, qua: st.qua - 1 } : st
        )
      );
    } else {
      return null;
    }
  };

  const values = {
    cart: store,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQuatity,
    decreaseQuatity,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
