import './App.css';
import React from "react";
import Shopcontent from "./displayProducts";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home(props) {
  return (
    <div className="Home">
      <Shopcontent
        shopitems={props.products}
        handleIncrease={props.handleIncrease}
        handleDecrease={props.handleDecrease}
        sortType={props.sortType}
        listNum={props.listNum}
        onSort={props.onSort}
      />
    </div>
  );
}
