import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { faShoppingCart, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Cart from "./Cart";
import SignIn from "./SignIn";
import './App.css';

export default function Navigation(props) {
    return (
        <div className="navbar">
            <Router>
                <ul className="nav mt-4 mb-5">
                    <li>
                        <h1>
                            <Link to="/" className="titleLogo">Jerusalem's Shop
                            <FontAwesomeIcon
                                    icon={faRegistered}
                                    className="fas fa-1x text-white"
                                />eact
                            </Link>
                        </h1>

                    </li>
                    <li className="shoppingCart">
                        <span className="m-2">{props.totalValue} items</span>

                        <Link to="/Cart">
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="fas fa-2x  text-white"
                            />
                        </Link>

                    </li>
                </ul>

                {/*----- Routes ------ */}
                <Switch>
                    <Route exact path="/">
                        <Home
                            products={props.items}
                            handleIncrease={props.handleIncrease}
                            handleDecrease={props.handleDecrease}
                            sortType={props.sortType}
                            listNum={props.listNum}
                            onSort={props.onSort}
                            />
                    </Route>
                    <Route path="/Cart">
                        <Cart products={props.items} totalValue={props.totalValue} />
                    </Route>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
