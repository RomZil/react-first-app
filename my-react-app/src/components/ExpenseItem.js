
import './ExpenseItem.css'

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <div className="expense-item__title "> {props.title}</div>
            <div className="expense-item__price"> {props.amount} $ </div>
            <img className="expense-item__img" src={props.img} alt=""></img> 
        </div>
    );
}

export default ExpenseItem;