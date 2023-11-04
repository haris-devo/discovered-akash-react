import { CloseOutlined, Menu } from "@mui/icons-material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", icon: "home.png", label: "Home" },
  { to: "/product", icon: "product.png", label: "Product" },
  { to: "/configurator", icon: "config.png", label: "Configurator" },
  { to: "/cart", icon: "cart.png", label: "Cart" },
  { to: "/login", icon: "signin.png", label: "Sign In/Up" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const location = useLocation();

  const handleToggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3 font-inter">
        <div className="w-full px-4  flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              to="/"
            >
              hello
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={handleToggleNavbar}
            >
              {navbarOpen ? <CloseOutlined /> : <Menu />}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              navbarOpen ? "flex" : "hidden"
            }`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {links.map(({ to, icon, label }) => (
                <li
                  className={`nav-item mx-6 ${
                    location.pathname === to ? "text-blue-100" : ""
                  }`}
                  key={label}
                >
                  <Link
                    className=" py-1 flex items-center md:flex-col gap-1 justify-center text-xs uppercase  leading-snug text-black hover:opacity-75"
                    to={to}
                  >
                    <img
                      src={window.location.origin+`/assets/icons/${icon}`}
                      alt={`${label} Icon`}
                      className="w-3 h-4 "
                    />
                    <span
                      className={`font-inter ${
                        location.pathname === to
                          ? "font-normal text-blue-300"
                          : ""
                      }`}
                    >
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
