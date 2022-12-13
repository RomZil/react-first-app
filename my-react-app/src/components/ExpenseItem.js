import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ExpenseItem.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
// import { data } from "../data/mockdata";

function ExpenseItem(props) {

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
    <ul>
      <li>
        <Link to={`/ItemDetails/${props.id}`}>
          <Card
            className="text-center"
            style={{ width: "200px", height: "250px" }}
          >
            <Card.Header style={{ fontSize: "3rem" }}>
              {props.title}
            </Card.Header>
            <Card.Img
              variant="top"
              src={props.img[0].url}
              style={{ width: "198px", height: "100px" }}
            />
            <Card.Body>
              <Card.Footer style={{ fontSize: "2rem", fontFamily: "cursive" }}>
                {props.price} $
              </Card.Footer>
            </Card.Body>
          </Card>
        </Link>

        <Button variant="success" onClick={(e) => onAdd(e, props.id)}>
          Add to Cart
        </Button>
      </li> 
    </ul>
  );
}

export default ExpenseItem;
