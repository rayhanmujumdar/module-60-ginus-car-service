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
    <div  className="sticky z-10 top-0 dark:bg-slate-900">
      <div className={`p-3 dark text-white md:hidden flex justify-between px-3`}>
        {
          <MenuIcon
            onClick={() => handleMenuIcon(!open)}
            className="w-6"
          ></MenuIcon>
        }
        <h1 className="text-xl font-mono hover:text-slate-600"><Link to='/'>Experts</Link></h1>
      </div>
        <nav
          onClick={() => handleMenuIcon(!open)}
          className={`z-10 py-4 dark text-white md:sticky fixed h-screen md:h-auto w-full md:w-full duration-700 top-0 md:translate-x-0 flex justify-between flex-row-reverse px-3 ${
            open || "translate-x-[-800px] duration-700"
          } md:flex md:items-center md:justify-between md:px-10`}
        >
          <h1 className="md:block text-xl font-mono hover:text-slate-600"><Link to='/'>Experts</Link></h1>
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
                to="/home"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="home#services"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                Services
              </a>
            </li>
            <li>
                <a
                href='home#experts'
                className="text-xl font-semibold hover:text-red-600 mx-2"
                >
                  Experts
                </a>
            </li>
            <li>
              <Link
                to="/Login"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                Login
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
