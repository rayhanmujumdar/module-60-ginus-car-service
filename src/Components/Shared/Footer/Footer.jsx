import React from "react";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white py-4 w-full bg-slate-400"
    >
      <p className="text-center">
        <small>
          All Copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>{" "}
          to this website {year}
        </small>
      </p>
    </footer>
  );
};

export default Footer;
