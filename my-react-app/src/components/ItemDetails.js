import './ItemDetails.css'

function ItemDetails(props) {

    return (
        <div className='expense-item'>
            <img className="ItemDetails__sec_img" src={props.sec_img} alt=""></img> 
            <div className="ItemDetails__store"> {props.store} $ </div>
            <div className="ItemDetails__desc"> {props.desc}</div>
        </div>
    );
}

export default ItemDetails;