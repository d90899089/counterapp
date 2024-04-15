import React from "react";
import NavComponent from "./NavComponent";

function ProductsComponent() {
  return (
    <>
      <NavComponent />
      <div className="mx-auto max-w-screen-lg mt-8 bg-pink-400 p-8">
        <h1 className="font-bold text-2xl text-center mb-4">
          PRODUCTS AVAILABLE IN PRIYA CREATIONS
        </h1>
        <ol className="list-disc ml-4">
          <li>Thread Bangles</li>
          <li>Thread Earrings</li>
          <li>Thread Bracelets</li>
          <li>Thread Rings</li>
          <li>Thread Chains</li>
        </ol>
        <img
          src="https://www.pinknyou.com/wp-content/uploads/2018/03/Multicoloured-Silk-Thread-Bangles-Set.jpg"
          alt="Thread Accessories"
          className="mx-auto mt-8"
          style={{ maxWidth: "600px" }}
        />
      </div>
    </>
  );
}

export default ProductsComponent;
