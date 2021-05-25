import React, {useState} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';
import {Link} from "react-router-dom";
export default function CartDisplay(props){
  return (
      <div>
        <ListGroup>
            {props.shopitems.filter(item => item.value > 0).map(shopitem => {
                return (
                <ListGroupItem key={shopitem.id} className="GroupItem">
                    <h2>{shopitem.desc}</h2>
                    <div className="itemcontent">
                        <img src={shopitem.image} alt="Shopping" height={150} width={150}/>
                        <div className="quantityDisplay">
                            <span>{shopitem.value}</span>
                            <p className="quantity">Quantity</p>
                        </div>
                    </div>

                </ListGroupItem>
                )
            })} 
        </ListGroup>
        <Link to="/login"><button>Check Out</button></Link>
    </div>
  );
} 