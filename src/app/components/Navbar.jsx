import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <span data-hover="Go">About</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span data-hover="Go">Portfolio</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <span data-hover="Go">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
