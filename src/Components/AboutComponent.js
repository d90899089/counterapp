import React from "react";
import NavComponent from "./NavComponent";

function AboutComponent() {
  return (
    <>
      <NavComponent />
      <div className="mx-auto max-w-screen-lg mt-8">
        <h1 className="bg-red-600 text-white text-center font-bold p-4">
          INFORMATION ABOUT PRIYA CREATIONS
        </h1>
        <p className="text-lg text-center">
          Hello, everyone! This page is all about handcrafted designs. Priya Creations specializes in creating thread bangles, earrings, rings, and chains.
        </p>
      </div>
    </>
  );
}

export default AboutComponent;
