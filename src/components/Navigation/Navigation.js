import { NavLink } from "react-router-dom";
import { useCarts } from "../../Providers/CartProvider";
import "./Navigation.css";
const Navigation = () => {
  const { cart } = useCarts();
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
