import ExpenseItem from "../components/ExpenseItem";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import appleimg from "../image/apple.jpg";
import milkimg from "../image/milk.jpg";
import chesseimg from "../image/chesse.jpg";
import meatimg from "../image/meat.jpg";


function main() {
  const expense = [
    { title: "Apple", amount: 5.9, img: appleimg },
    { title: "Milk", amount: 6.5, img: milkimg },
    { title: "Cheese", amount: 12.0, img: chesseimg },
    { title: "Meat", amount: 55.6, img: meatimg },
  ];

  return (
    <div className="main">
      <div className="page_title"> Products list</div>
      <Container>
        <Row>
          <Col>
            <ExpenseItem
              title={expense[0].title}
              amount={expense[0].amount}
              img={expense[0].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              title={expense[1].title}
              amount={expense[1].amount}
              img={expense[1].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              title={expense[2].title}
              amount={expense[2].amount}
              img={expense[2].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              title={expense[3].title}
              amount={expense[3].amount}
              img={expense[3].img}
            ></ExpenseItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default main;
