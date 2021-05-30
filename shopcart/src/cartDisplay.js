import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';

export default function Cartcontent(props) {
  return (
    <ListGroup>
      {props.shopitems.map(shopitem => {
        return (
          <ListGroupItem key={shopitem.id} className="GroupItem">
            <h2>{shopitem.desc}</h2>
            <div className="itemcontent">
              <img src={shopitem.image} alt="Shopping" height={150} width={150} />
              <div className="quantityDisplay">
                <span>{shopitem.value}</span>
                <p className="quantity">Quantity</p>
              </div>
            </div>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  );
}
