import { BiMenu, BiX, BiShoppingBag } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import { useState } from "react";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "Service", link: "/" },
    { name: "About", link: "/" },
    { name: "Blog's", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <header className="z-[2] w-full mx-auto fixed top-0 left-0 right-0 bg-white shadow">
      <nav className="container mx-auto md:flex items-center justify-between  py-4 md:px-10 px-7 text-2xl md:text-xl ">
        <div className=" flex items-center text-gray-800">
          <NavLink
            to="/cart"
            className="text-3xl text-indigo-600 mr-5 flex items-center"
          >
            <BiShoppingBag />
            <span className="text-white bg-red-700 absolute rounded-full text-sm -mt-5 ml-5 py-0 px-1.5">
              {cart.length}
            </span>
          </NavLink>

          <NavLink to="/" className="mr-5 hover:text-amber-400">
            Home
          </NavLink>

          <NavLink
            to={userData ? "/profile" : "/login"}
            className="hover:text-amber-400"
          >
            {userData ? "profile" : "Login / Signup"}
          </NavLink>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <BiX /> : <BiMenu />}
        </div>

        <ul
          className={` bg-white md:flex md:items-center md:pb-0 pb-12 absolute md:static   left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-18 opacity-100 "
              : "top-[-490px] md:opacity-100 opacity-0 "
          }`}
        >
          {Links.map((item) => (
            <li key={item.name} className="md:ml-8 md:my-0 my-7 ">
              <a
                href={item.link}
                className="text-gray-800 hover:text-amber-400 duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
