import image from "../../assets/cartIcon.svg";
import "./CartIcon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const CartIcon = () => {
  const { isCartDropdownVisible, setIsCartDropdownVisible, totalProducts } =
    useContext(CartContext);
  const toggleCartDropdown = () => {
    setIsCartDropdownVisible(!isCartDropdownVisible);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <img src={image} className="shopping-icon" />
      <span className="item-count">{totalProducts}</span>
    </div>
  );
};

export default CartIcon;
