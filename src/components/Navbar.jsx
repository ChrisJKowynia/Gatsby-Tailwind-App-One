import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between mx-28 my-8">
      <Link to="/" className="text-xl font-bold text-blue-500">
        <FontAwesomeIcon icon={faWandMagicSparkles} />
        <span> SHORDITCH</span>
        <span className="text-black font-normal">AI</span>
      </Link>
      <div class="flex flex-row justify-between items-center w-64 ">
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
    </nav>
  );
}
