import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="text-center" style={{ width: "200px", height: "250px" }}  >
      <Card.Header style={{ fontSize: "3rem" }}>{props.title}</Card.Header>
      <Card.Img variant="top" src={props.img} style={{ width: "198px", height: "150px" }} />
      <Card.Body>
        <Card.Footer style={{ fontSize: "2rem", fontFamily: "cursive" }}>
          {props.amount} $
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default ExpenseItem;
