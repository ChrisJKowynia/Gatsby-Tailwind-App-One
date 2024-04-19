import React from "react";
import { Link } from "gatsby";

export default function Navbar() {
  return (
    <nav>
      <Link to="/" className="text-blue-500">
        ShorditchAI
      </Link>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </nav>
  );
}
