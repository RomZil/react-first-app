import ExpenseItem from "../components/ExpenseItem";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import appleimg from "../image/apple.jpg";
import milkimg from "../image/milk.jpg";
import chesseimg from "../image/chesse.jpg";
import meatimg from "../image/meat.jpg";
// import { Link } from "react-router-dom";

function main() {
  const expense = [
    {
      id: 0,
      title: "Apple",
      amount: 5.9,
      img: appleimg,
      sec_img: "",
      store: "shokishok",
      desc: "Big red apple",
    },
    {
      id: 1,
      title: "Milk",
      amount: 6.5,
      img: milkimg,
      sec_img: "",
      store: "shokishok",
      desc: "5% Oat Milk",
    },
    {
      id: 2,
      title: "Cheese",
      amount: 12.0,
      img: chesseimg,
      sec_img: "",
      store: "shokishok",
      desc: "American Cheese",
    },
    {
      id: 3,
      title: "Meat",
      amount: 55.6,
      img: meatimg,
      sec_img: "",
      store: "shokishok",
      desc: "Fresh ground beef",
    },
  ];

  return (
    <div className="main">
      <div className="page_title"> Products list </div>
      <Container>
        <Row>
          <Col>
            {/* <Link to="/ItemDetails/0"> */}
            <ExpenseItem
              id={expense[0].id}
              title={expense[0].title}
              amount={expense[0].amount}
              img={expense[0].img}
            ></ExpenseItem>
            {/* </Link> */}
          </Col>
          <Col>
            <ExpenseItem
              id={expense[0].id}
              title={expense[1].title}
              amount={expense[1].amount}
              img={expense[1].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={expense[0].id}
              title={expense[2].title}
              amount={expense[2].amount}
              img={expense[2].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={expense[0].id}
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
