import React from "react";
import { Link } from "gatsby";
export default function CTA() {
  return (
    <div>
      <Link
        to="/signup"
        className="text-white bg-blue-500 font-bold rounded-lg p-4 block mt-4"
      >
        Start scanning now!
      </Link>
    </div>
  );
}
