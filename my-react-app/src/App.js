
import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expense = [
    { title: 'Apple', amount: 5.90 , img: './image/Apple.jpg'},
    { title: 'Milk', amount: 6.50, img: './image/Milk.jpg' },
    { title: 'Cheese', amount: 12.00, img: './image/Cheese.jpg'},
    { title: 'Meat', amount: 55.60 , img: './image/Meat.jpg'},

  ];
  return (
    <div>
      <h2> Products list</h2>
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
