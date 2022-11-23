import main from "./pages/main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";

function App() {

  return (
<Router>
  <div className="App">
   <Container>
    <Route path="/" component={main} exact />
    <Route path="/ItemDetails/:id" component={ItemDetails} exact />

   </Container>
  </div>
</Router>
  );
}

export default App;
