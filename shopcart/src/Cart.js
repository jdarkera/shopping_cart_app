import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Cart(props) {
    return (
        <div className="Cart">
            <h2>Your Cart Items</h2>
            {props.products.map(item => {
                if (item.value > 0) {
                    return (
                        <div className="cartDisplay">
                            <img src={item.image} alt="Shopping" height={150} width={150} />
                            <div className="quantityDisplay">
                                <span>{item.value}</span>
                                <p className="quantity">Quantity</p>
                            </div>
                        </div>
                    )
                }
            })}
            <Display totalValue={props.totalValue} />
        </div>
    )
}

const Display = ({ totalValue }) => {
    return (
        totalValue > 0 ?
            <Link to="/SignIn">
                <button className="btn btn-primary" id="cartBtn">
                    Check Out
            </button>
            </Link>
            :
            <React.Fragment>
                <h4>There are 0 items in your cart.</h4>
                <Link to="/">
                    <button className="btn btn-success" id="cartBtn">
                        Continue Shop
                </button>
                </Link>
            </React.Fragment>
    )
}
