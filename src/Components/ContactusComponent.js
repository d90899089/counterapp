import React, { useState } from "react";
import NavComponent from "./NavComponent";
import axios from "axios";

function ContactUsComponent() {
  const [formdata, setFormdata] = useState({ name: "", address: "" });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/contactformdata",
        formdata
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error while submitting: ", error);
    }
  };

  return (
    <>
      <NavComponent />
      <div className="mx-auto max-w-screen-lg mt-8">
        <h1 className="font-bold text-center">
          Hello, if you want handmade thread accessory designs, please contact
          us at Priya Creations
        </h1>
        <form onSubmit={handlesubmit}>
          <div className="mt-4">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formdata.name}
              onChange={handlechange}
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
              name="address"
              value={formdata.address}
              onChange={handlechange}
              placeholder="Enter your address"
              className="border border-gray-400 px-4 py-2 rounded mt-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactUsComponent;
