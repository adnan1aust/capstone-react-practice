import "./CheckoutItem.scss";

const CheckoutItem = ({
  cartItem,
  onRemoveClick,
  addItemToCart,
  decreaseItemFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemToCart}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button" onClick={onRemoveClick}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
