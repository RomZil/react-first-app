import Home from "./pages/Home.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import { data } from "./data/mockdata.js";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";
import { useEffect } from "react";
const axios = require("axios")

function App() {

  const [items, setItems] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [dbdata, setData] = useState(data);

  useEffect(() => {
    fetch("http://localhost:4000/products")
    .then((Response) => Response.json())
    .then((data) => {
      setData(data.products)
    })
  }, [dbdata]);

  const onAdd = (e, id) => {
    const cartItem = items.filter((item) => item.id === id)[0];
    cartItems.push(cartItem);

    // Create cartItem object in mongoose db.
    axios.post("http://localhost:4000/add-cart-item", {
      item: cartItem
    }).then (()=> {
      console.log("Item cart successfully saved in db")
    })
    setCartItems(cartItems);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home items={dbdata} onAdd={onAdd} cartItems={cartItems} /> }  />
          <Route exact path="/ItemDetails/:id/" element={<ItemDetails />} />
          <Route exact path="/Cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
