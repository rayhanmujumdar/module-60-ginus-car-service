import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="sticky z-10 top-0 py-4 bg-stone-700 text-white">
      <nav className="">
        <ul className="flex justify-center items-center">
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
