import React from "react";
import NavComponent from "./NavComponent";

function HomeComponent() {
  return (
    <>
      <NavComponent />
      <div className="mx-auto max-w-screen-lg  mt-8">
        <h1 className="font-bold bg-blue-500 p-4 text-white text-center">
          <i>Hello, everyone! Welcome to Priya Creations ,this creations is very useful to us</i>
        </h1>
        <div className="mt-8">
          <img
            src="https://cdn.vibecity.in/providers/63380f14e4a83f0012de8911/il794xN3886903580m9xq-transformed_9d0b6e27-88e5-49d1-9539-4aa43e0f906a-3X.png"
            alt="Priya Creations Logo"
            className="mx-auto"
            style={{ maxWidth: "800px" }}
          />
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
