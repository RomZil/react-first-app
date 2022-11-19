
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <h1 className="expense-item__description "> {props.title}{"\n"}</h1>
            <h2 className="expense-item__price"> {props.amount} $ </h2>
            <img className="expense-item__img" src={props.img} alt=""></img> 
        </div>
    );
}

export default ExpenseItem;