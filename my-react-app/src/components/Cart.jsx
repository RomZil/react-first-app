import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ExpenseItem.css";
import CommentsWindow from "./CommentsWindow";
import ExpenseItem from "./ExpenseItem";
import CardHeader from "react-bootstrap/esm/CardHeader";


function Cart({ items }) {
  const [showComments, setShowComments] = useState(false);

  const getTotal = () => {
    let sum = 0;
    items.map((item) => (sum += item.price));
    return sum;
  };

  const changeCommentsDisp = () => {
    setShowComments(!showComments);
  console.log(showComments)
    
  };

  return (

    <Card className="cart">
    <Button onClick={changeCommentsDisp}>Add details</Button>
    <CardHeader className="totalPrice">Total: ${getTotal()}</CardHeader>
    {showComments ? (
             <CommentsWindow  close={changeCommentsDisp} />
        ) : (
          <></>
        )}
 
    {items.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
  </Card>
  );
}

export default Cart;
