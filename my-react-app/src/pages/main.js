import ExpenseItem from "../components/ExpenseItem";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import appleimg from "../image/apple.jpg";
import milkimg from "../image/milk.jpg";
import chesseimg from "../image/chesse.jpg";
import meatimg from "../image/meat.jpg";
import React from 'react';

function main() {
  const expense = [
    { title: "Apple", price: 5.9, img: appleimg },
    { title: "Milk", price: 6.5, img: milkimg },
    { title: "Cheese", price: 12.0, img: chesseimg },
    { title: "Meat", price: 55.6, img: meatimg },
  ];

  return (
    <div className="main">
      <div className="page_title"> Products list</div>
      <Container>
        <Row>
          <Col>
            <ExpenseItem
              title={expense[0].title}
              price={expense[0].price}
              img={expense[0].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              title={expense[1].title}
              price={expense[1].price}
              img={expense[1].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              title={expense[2].title}
              price={expense[2].price}
              img={expense[2].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              title={expense[3].title}
              price={expense[3].price}
              img={expense[3].img}
            ></ExpenseItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default main;
