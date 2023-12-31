import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    decreaseItemFromCart,
    deleteItemFromCart,
    cartTotal,
  } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem
          cartItem={item}
          key={item.id}
          onRemoveClick={() => deleteItemFromCart(item)}
          addItemToCart={() => addItemToCart(item)}
          decreaseItemFromCart={() => decreaseItemFromCart(item)}
        />
      ))}
      <span className="total">Total: {cartTotal}$</span>
    </div>
  );
};

export default Checkout;
