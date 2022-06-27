import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
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
            <li className="nav__item">
              <NavLink
                to="/cart"
                className={(navData) =>
                  navData.isActive ? "activeLink" : "nav__link"
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
