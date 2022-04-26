import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import useNav from "../../../Hooks/useNav";

const Header = () => {
  const [nav, setNav] = useNav();
  const [open, setOpen] = useState(false);
  const handleMenuIcon = (open) => {
    setOpen(open);
  };
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return loading ? (
    <p className="text-center">loading....</p>
  ) : (
    <div className="sticky z-10 top-0 dark:bg-slate-900">
      <div
        className={`p-3 dark text-white md:hidden flex justify-between px-3 ${
          nav && "bg-stone-600"
        }`}
      >
        {
          <MenuIcon
            onClick={() => handleMenuIcon(!open)}
            className="w-6"
          ></MenuIcon>
        }
        <h1 className="text-xl font-mono hover:text-slate-600">
          <Link to="/">Experts</Link>
        </h1>
      </div>
      <nav
        onClick={() => handleMenuIcon(!open)}
        className={`z-10 py-4 dark:bg-slate-900 text-white md:sticky fixed h-screen md:h-auto w-full md:w-full duration-700 top-0 md:translate-x-0 flex justify-between flex-row-reverse px-3 ${
          open || "translate-x-[-800px] duration-700"
        } md:flex md:items-center items-start md:justify-between md:px-10 ${
          nav && "md:bg-white md:text-black"
        }`}
      >
        <div className="flex gap-4 items-center">
          <h1 className="md:block text-xl font-mono hover:text-slate-600">
            <Link to="/">Experts</Link>
          </h1>
          {user && (
            <button
              onClick={handleSignOut}
              className="bg-yellow-600 px-3 py-2 rounded-md"
            >
              SignOut
            </button>
          )}
        </div>
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
            <Link
              to="services"
              className="text-xl font-semibold hover:text-red-600 mx-2"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="experts"
              className="text-xl font-semibold hover:text-red-600 mx-2"
            >
              Experts
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                to="/profile"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                Profile
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="Login"
                className="text-xl font-semibold hover:text-red-600 mx-2"
              >
                Login
              </Link>
            </li>
          )}
          {user && (
            <>
              <li>
                <Link
                  to="addservice"
                  className="text-xl font-semibold hover:text-red-600 mx-2"
                >
                  Add-service
                </Link>
              </li>
              <li>
                <Link
                  to="manage"
                  className="text-xl font-semibold hover:text-red-600 mx-2"
                >
                  Manage
                </Link>
              </li>
              <li>
                <Link
                  to="order"
                  className="text-xl font-semibold hover:text-red-600 mx-2"
                >
                  Order
                </Link>
              </li>
            </>
          )}
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
