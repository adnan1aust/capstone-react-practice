import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setUser(null);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
