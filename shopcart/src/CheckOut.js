import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CheckOut({ fbpic, fbdata }) {
  return (
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <p className="my-5">Time to checkout?</p>
    </React.Fragment>
  );
}

export default CheckOut;
