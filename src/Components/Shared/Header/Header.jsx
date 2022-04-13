import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenuIcon = (open) => {
    setOpen(open);
  };
  return (
    <div onClick={() => handleMenuIcon(!open)} className="sticky z-10 top-0 bg-stone-900">
      <div className={`p-3 bg-stone-700 text-white md:hidden`}>
        {
          <MenuIcon
            onClick={() => handleMenuIcon(!open)}
            className="w-6"
          ></MenuIcon>
        }
      </div>
        <nav
          className={`z-10 py-4 bg-stone-700 text-white fixed h-screen md:h-auto w-full md:w-full duration-700 top-0 md:translate-x-0 ${
            open || "translate-x-[-600px] duration-700"
          }`}
        >
          <ul className="md:flex justify-center items-center">
            <li className="px-2 pb-4 md:hidden">
              {open && (
                <XIcon
                  className="w-6"
                  onClick={() => handleMenuIcon(!open)}
                ></XIcon>
              )}
            </li>
            <li>
              <Link
                to="/"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Header;
