import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent";
import ImageComponent from "./Components/ImageComponent";
import AboutComponent from "./Components/AboutComponent";
import ProductsComponent from "./Components/ProductsComponent";
import ContactusComponent from "./Components/ContactusComponent";
import CounterComponent from "./Components/CounterComponent"; 
import SaveData from "./Components/datasave";
import FileUpload from "./Components/FileuploadComponent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/Image" element={<ImageComponent />} />
          <Route path="/About" element={<AboutComponent />} />
          
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/contactus" element={<ContactusComponent />} />
          <Route path="/counterapp" element={<CounterComponent />} />


          <Route path="/save" element={<SaveData/>}/>
          <Route path="/upload" element={<FileUpload/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
