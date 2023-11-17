import { createContext, useState } from "react";

const addCartItem = (cartItems, product) => {
  const existingProduct = cartItems.find((item) => item.id === product.id);
  if (existingProduct) {
    return cartItems.map((item) => {
      if (item.id === existingProduct.id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
  }
  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  return cartItems
    .filter((item) => item.quantity > 0)
    .map((item) => {
      if (item.id === product.id) {
        item.quantity = item.quantity - 1;
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
};

export const CartContext = createContext({
  isCartDropdownVisible: false,
  setIsCartDropdownVisible: () => null,
  cartItems: [],
  addItemToCart: () => {},
  totalProducts: 0,
  cartTotal: 0,
  decreaseItemFromCart: () => {},
  deleteItemFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartDropdownVisible, setIsCartDropdownVisible] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
    setTotalProducts(totalProducts + 1);
    setCartTotal(cartTotal + product.price);
  };

  const decreaseItemFromCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
    setTotalProducts(totalProducts > 0 ? totalProducts - 1 : 0);
    setCartTotal(cartTotal - product.price);
  };

  const deleteItemFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
    setTotalProducts(totalProducts - product.quantity);
    setCartTotal(cartTotal - product.price * product.quantity);
  };

  const value = {
    isCartDropdownVisible,
    cartTotal,
    setIsCartDropdownVisible,
    addItemToCart,
    cartItems,
    totalProducts,
    decreaseItemFromCart,
    deleteItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
