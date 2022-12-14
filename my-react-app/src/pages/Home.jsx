import ExpenseItem from "../components/ExpenseItem";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "../components/Cart";
// import React, { useState, useEffect } from 'react';
// import {data} from '../data/mockdata.js'

const Home = ({items , onAdd}) => {

  return (
    <div className="Home">
      <div className="page_title"> Products list </div>
      {!onAdd ? <Cart items={items} /> : <></>}
      <div className="items">
        {items.map((item) => (
          <ExpenseItem
            onAdd={onAdd}
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
