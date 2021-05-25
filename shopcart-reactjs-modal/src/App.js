import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayProducts from './displayProducts';
import NavBar from './navbar';
import { products } from './products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
      // products : [
      //   { id:1, image: './products/cologne.jpg', desc: 'Unisex Cologne', rating: 5, value: 0 },
      //   { id:2, image: './products/iwatch.jpg', desc: 'Apple iWatch', rating: 4, value: 0 },
      //   { id:3, image: './products/mug.jpg', desc: 'Unique Mug', rating: 4.5, value: 0 },
      //   { id:4, image: './products/wallet.jpg', desc: 'Mens Wallet', rating: 5, value: 0 }
      // ]
    };
  }  

  handleIncrement = (addValue) => {
      const updatedValue = addValue.value++;
      this.setState({updatedValue});
  }

  handleDecrement = (subValue) => {
    if (subValue.value > 0) {
      const updatedValue = subValue.value--;
      this.setState({updatedValue});
    }
  }

  render() {
    return(
      <div>
        <NavBar 
          totalValue={this.state.products.map(prod =>prod.value).reduce((acc, curr, index)=> acc + curr, 0)}
          prods={this.state.products} 
          handleIncrement={this.handleIncrement} 
          handleDecrement={this.handleDecrement}
        />
        <DisplayProducts
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        </div>
    );
  } 
}

export default App;