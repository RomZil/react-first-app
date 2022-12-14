import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ExpenseItem.css";
import { Link } from "react-router-dom";


function ExpenseItem( props, { onAdd }) {
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

        {onAdd ? (
          <Button
            variant="success"
            onClick={(e) => onAdd(e, props.id)}
          >
            Add to Cart
          </Button>
        ) : (
          <></>
        )}
      </li>
    </ul>
  );
}

export default ExpenseItem;
