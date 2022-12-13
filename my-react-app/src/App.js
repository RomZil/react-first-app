import Home from "./pages/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { data } from "./data/mockdata.js";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";



function App() {

  console.log("App in port 3000");

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home /> }  />
          <Route exact path="/ItemDetails/:id/" element={<ItemDetails />} />
          <Route exact path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
