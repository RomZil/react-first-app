import ExpenseItem from "../components/ExpenseItem";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import {data} from '../data/mockdata.js'
import { on } from "nodemon";

const Home = () => {
  const [dbdata, setData] = useState(data);

  useEffect(() => {
    fetch("http://localhost:4000/products")
    .then((Response) => Response.json())
    .then((data) => {
      // console.log(data.products)
      setData(data.products)
    })
  }, [dbdata]);

  // const [items, setItems] = useState(data);
  // const [cartItems, setCartItems] = useState([]);

  // const onAdd = (e, id) => {
  //   const cartItem = items.filter((item) => item.id === id)[0];
  //   cartItems.push(cartItem);
  //   console.log(cartItems);
  //   console.log(cartItem);
  //   setCartItems(cartItems);
  
  // };

  return (
    <div className="Home">
      <div className="page_title"> Products list </div>
      <Container>
        <Row>
          <Col>
            <ExpenseItem 
              id={dbdata[0].id}
              title={dbdata[0].title}
              price={dbdata[0].price}
              img={dbdata[0].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={dbdata[1].id}
              title={dbdata[1].title}
              price={dbdata[1].price}
              img={dbdata[1].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={dbdata[2].id}
              title={dbdata[2].title}
              price={dbdata[2].price}
              img={dbdata[2].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={dbdata[3].id}
              title={dbdata[3].title}
              price={dbdata[3].price}
              img={dbdata[3].img}
            ></ExpenseItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
