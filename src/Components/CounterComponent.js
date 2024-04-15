import React, { useState } from "react";
import NavComponent from "./NavComponent";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <NavComponent />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Counter App</h1>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
              onClick={decrement}
            >
              Decrement
            </button>
            <h2 className="text-xl">Count: {count}</h2>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
              onClick={increment}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
