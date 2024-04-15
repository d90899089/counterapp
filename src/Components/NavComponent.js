import React from "react";

function NavComponent() {
  return (
    <nav className="flex justify-center">
      <ul className="flex">
        <li className="mr-2">
          <a className="inline-block py-2 px-4 bg-yellow-400 text-white font-bold rounded hover:bg-red-500" href="/">
            Home
          </a>
        </li>
        <li className="mr-2">
          <a className="inline-block py-2 px-4 bg-yellow-400 text-white font-bold rounded hover:bg-red-500" href="/about">
            About
          </a>
        </li>
        <li className="mr-2">
          <a className="inline-block py-2 px-4 bg-yellow-400 text-white font-bold rounded hover:bg-red-500" href="/products">
            Products
          </a>
        </li>
        <li className="mr-2">
          <a className="inline-block py-2 px-4 bg-yellow-400 text-white font-bold rounded hover:bg-red-500" href="/contactus">
            Contact Us
          </a>
        </li>
        <li>
          <a className="inline-block py-2 px-4 bg-yellow-400 text-white font-bold rounded hover:bg-red-500" href="/counterapp">
            Counter App
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavComponent;
