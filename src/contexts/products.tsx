import { createContext, useState } from "react";
import PRODUCT_LIST from "../assets/shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT_LIST);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
