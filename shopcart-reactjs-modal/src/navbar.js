import { Link, BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {faRegistered, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./cart"
// import DisplayProducts from "./displayProducts"

export default function NavBar(props){
    return (
        <div className="navbar p-5 bg-info">  
            <Router>
                <h1>
                    <Link to="/" className="text-decoration-none text-white">
                    <span className="">My Shop</span>
                    </Link>
                </h1>

                <p className="text-white">
                    <Link to="/cart">
                        <FontAwesomeIcon 
                            icon={faShoppingCart}
                            className="fas fa-lg text-white" />
                    </Link> 
                    <span className="font-weight-bold text-white">{props.totalValue}</span>
                </p>
                <Switch>
                    <Route exact path="/">
                        {/* <DisplayProducts 
                            ShoppingItems={props.prods}          
                            onIncrement={props.handleIncrement}
                            onDecrement={props.handleDecrement}
                        /> */}
                    </Route>
                    <Route path="/cart">
                        <Cart prod= {props.prods} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}