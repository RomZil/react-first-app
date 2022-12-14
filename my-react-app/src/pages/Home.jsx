import ExpenseItem from "../components/ExpenseItem";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "../components/Cart";
import { Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap/esm";

const Home = ({cartItems , items , onAdd}) => {

  return (
    <div className="Home">
      <div className="page_title"> Products list </div>
      {onAdd ? <Cart items={cartItems} /> : <></>}
      <Container className="items">
        {items.map((item) => (
          <ExpenseItem
            onAdd={onAdd}
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
        ))}
      </Container>
    </div>
  );
}

export default Home;
