import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const Checkout = () => {
  const { cartItems, addItemToCart, decreaseItemFromCart } =
    useContext(CartContext);
  return (
    <div>
      <h1>Checkout page</h1>
      <div>
        {cartItems.map((item) => {
          const { id, name, quantity } = item;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <span>{quantity}</span>
              <br />
              <span onClick={() => decreaseItemFromCart(item)}>Decrement</span>
              <br />
              <span onClick={() => addItemToCart(item)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
