import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExpenseItem.css";
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

function ExpenseItem(props) {
  // const {id} = useParams;
  return (
    <ul>
      <li>
        <Link to={"/ItemDetails/${props.id}"}>
          <Card
            className="text-center"
            style={{ width: "200px", height: "250px" }}
          >
            <Card.Header style={{ fontSize: "3rem" }}>
              {props.title}
            </Card.Header>
            <Card.Img
              variant="top"
              src={props.img}
              style={{ width: "198px", height: "150px" }}
            />
            <Card.Body>
              <Card.Footer style={{ fontSize: "2rem", fontFamily: "cursive" }}>
                {props.amount} $
              </Card.Footer>
            </Card.Body>
          </Card>
        </Link>
      </li>
    </ul>
  );
}

export default ExpenseItem;
