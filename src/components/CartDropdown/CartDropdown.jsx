import "./CartDropdown.scss";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      {cartItems.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
      <Button onClick={navigateToCheckout}>Got to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
