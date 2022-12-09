import Home from "./pages/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import React from 'react';

function App() {
  console.log("App in port 3000")
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ItemDetails/:id/" element={<ItemDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
