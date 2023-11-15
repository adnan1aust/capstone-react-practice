import "./CartDropdown.scss";
import Button from "../Button/Button";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Got to Checkout</Button>
    </div>
  );
};

export default CartDropDown;
