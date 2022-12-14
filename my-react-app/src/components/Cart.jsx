import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ExpenseItem.css";
import CommentsWindow from "./CommentsWindow";


function Cart({ items }) {
  const [showComments, setShowComments] = useState(false);

  const getTotal = () => {
    let sum = 0;
    items.map((item) => (sum += item.price));
    return sum;
  };

  const changeCommentsDisp = () => {
    setShowComments(!showComments);
  };

  return (

    <Card className="cart">
    <Button onClick={changeCommentsDisp}>Add details</Button>
    <div className="totalPrice">Total: ${getTotal()}</div>
    <CommentsWindow show={showComments} close={changeCommentsDisp} />
  </Card>
  );
}

export default Cart;
