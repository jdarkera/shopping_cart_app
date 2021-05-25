import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./products";
import Cartcontent from "./cartDisplay";

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: products
        };
    }
    render(){
        return ( 
            <div className="Cart">
            <Cartcontent 
                shopitems={this.state.products}
            />
            </div>
        );
    }
}
export default Cart;

// export default function Cart(props){

// //     return(
// //         <div>
// //             {props.prod.map(prop => {
// //                 return (
// //                     <div>
                        
// //                     </div>
// //                 ); 
// //             }) 

// //             }
// //         </div>
// //     );
// }
