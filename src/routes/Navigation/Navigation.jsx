import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import Logo from "../../assets/crown.svg";

const Navigation = () => {
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
          <Link className="nav-link" to="/authentication">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
