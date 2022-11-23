import './ItemDetails.css'
import "bootstrap/dist/css/bootstrap.css";

function ItemDetails(props) {

    return (
        <div className='ItemDetails'>
            <img className="ItemDetails__sec_img" src={props.sec_img} alt=""></img> 
            <div className="ItemDetails__store"> {props.store}</div>
            <div className="ItemDetails__desc"> {props.desc}</div>
        </div>
    );
}

export default ItemDetails;