import './App.css';
import React, { Component } from "react";
import { products } from "./products";
import Navigation from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "normal",
      listNum: "",
      shoppingItem: products
    };
  }

  handleIncrease = (item) => {
    const updatedItem = item.value++;
    this.setState({ updatedItem });
  }

  handleDecrease = (item) => {
    if (item.value > 0) {
      const updatedItem = item.value--;
      this.setState({ updatedItem });
    }
  }

  onSort = (listNum, sortType) => {
    listNum.sort((a, b) => {
      if(sortType === "normal") {
        return a.id < b.id ? 1 : -1;
      } else if (sortType === "lowest") {
        return a.price < b.price ? -1 : 1;
      } else {
        return a.price < b.price ? 1 : -1;
      }
    });
    this.setState({ sortType })
  };

  render() {
    return (
      {},
      (
        <div className="App">
          <Navigation
            totalValue={this.state.shoppingItem.map(item => item.value).reduce((acc, curr, index) => acc + curr, 0)}
            items={this.state.shoppingItem}
            handleIncrease={this.handleIncrease}
            handleDecrease={this.handleDecrease}
            sortType = {this.state.sortType}
            listNum = {this.state.listNum}
            onSort={this.onSort}
            />
        </div>
      )
    );
  }
}

export default App;
