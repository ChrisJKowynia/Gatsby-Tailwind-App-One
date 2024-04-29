import React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menu, menuSet] = useState(true);
  function menuHandler() {
    if (menu === true) {
      menuSet(false);
    } else if (menu === false) {
      menuSet(true);
    }
  }
  let menuStatus;
  if (menu === true) {
    menuStatus = "-mt-80";
  } else {
    menuStatus = "mt-4 transition-[margin-top] duration-500 ease-in-out";
  }
  return (
    <nav className="flex justify-between">
      <div className="flex flex-col justify-between ml-4 my-4 md:ml-20 lg:mr-20 lg:flex-row lg:w-full lg:mt-4 lg:mb-2">
        <Link
          to="/"
          className="text-xl font-bold text-blue-500 z-20 bg-white -mt-8 pt-8"
        >
          <FontAwesomeIcon icon={faWandMagicSparkles} />
          <span> SHORDITCH</span>
          <span className="text-black font-normal">AI</span>
        </Link>
        <div
          className={`flex flex-col justify-between items-start  ${menuStatus}  ml-7 h-28 z-10 lg:mt-4 lg:flex-row lg:items-center lg:ml-0 lg:h-0 lg:w-80 lg:transition-none`}
        >
          <Link to="/contact" className="text-gray-400">
            Contact
          </Link>
          <Link to="/login" className="text-gray-400">
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white bg-blue-500 font-bold p-2 rounded-lg"
          >
            Sign up
          </Link>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-xl text-gray-400  mr-5 my-5 md:mr-20 lg:hidden"
        onClick={menuHandler}
      />
    </nav>
  );
}
