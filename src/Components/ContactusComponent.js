import React from "react";
import NavComponent from "./NavComponent";

function ContactUsComponent() {
  return (
    <>
      <NavComponent />
      <div className="mx-auto max-w-screen-lg mt-8">
        <h1 className="font-bold text-center">
          Hello, if you want handmade thread accessory designs, please contact us at Priya Creations
        </h1>
        <div className="mt-4">
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="border border-gray-400 px-4 py-2 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="address" className="block">
            Address:
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter your address"
            className="border border-gray-400 px-4 py-2 rounded mt-1 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUsComponent;
