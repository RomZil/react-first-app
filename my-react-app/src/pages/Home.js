import ExpenseItem from "../components/ExpenseItem";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import data from '../data/mockdata.js'

function main() {
  return (
    <div className="main">
      <div className="page_title"> Products list </div>
      <Container>
        <Row>
          <Col>
            <ExpenseItem
              id={data[0].id}
              title={data[0].title}
              amount={data[0].amount}
              img={data[0].img}
            ></ExpenseItem>
            {/* </Link> */}
          </Col>
          <Col>
            <ExpenseItem
              id={data[1].id}
              title={data[1].title}
              amount={data[1].amount}
              img={data[1].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={data[2].id}
              title={data[2].title}
              amount={data[2].amount}
              img={data[2].img}
            ></ExpenseItem>
          </Col>
          <Col>
            <ExpenseItem
              id={data[3].id}
              title={data[3].title}
              amount={data[3].amount}
              img={data[3].img}
            ></ExpenseItem>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default main;
