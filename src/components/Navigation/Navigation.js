import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header>
      <div className="mainNavigation bd-container">
        <nav className="navbar">
          <ul className="navlist">
            <li className="nav__item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive ? "activeLink" : "nav__link"
                }
              >
                home
              </NavLink>
            </li>
            <div className="nav__items">
              <li className="nav__item cart-length">
                <NavLink
                  to="/cart"
                  className={(navData) =>
                    navData.isActive ? "activeLink" : "nav__link"
                  }
                >
                  Cart<span>{cart.length}</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to={userData ? "/profile" : "/login"}
                  className={(navData) =>
                    navData.isActive ? "activeLink" : "nav__link"
                  }
                >
                  {userData ? "profile" : "login / signup"}
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
