import image from "../../assets/cartIcon.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img src={image} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
