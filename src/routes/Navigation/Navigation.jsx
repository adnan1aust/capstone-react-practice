import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropDown from "../../components/CartDropdown/CartDropdown";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const { isCartDropdownVisible } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {user ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign out
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartDropdownVisible ? <CartDropDown /> : null}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
