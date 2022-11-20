
import ExpenseItem from "./components/ExpenseItem";
import './App.css';
import appleimg from './image/apple.jpg';
import milkimg from './image/milk.jpg';
import chesseimg from './image/chesse.jpg';
import meatimg from './image/meat.jpg';



function App() {

  const expense = [
    { title: 'Apple', amount: 5.90 , img: appleimg},
    { title: 'Milk', amount: 6.50, img: milkimg },
    { title: 'Cheese', amount: 12.00, img: chesseimg},
    { title: 'Meat', amount: 55.60 , img: meatimg},

  ];

  return (
    <div className="App-gen" >
      <div className="page_title"> Products list</div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        img={expense[0].img}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        img={expense[1].img}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        img={expense[2].img}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        img={expense[3].img}
      ></ExpenseItem>
    </div>
  );
}

export default App;
