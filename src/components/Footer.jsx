import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div>
      <footer className="flex flex-row justify-center items-center my-12">
        <Link to="/" className="text-blue-500">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
          Shorditch AI
        </Link>
        <p className="text-xs ml-2">
          A <a href="https://www.gatsbyjs.com/">gatsby</a> site by Chris Kowynia
        </p>
      </footer>
    </div>
  );
}
