// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { addToCart } from './actions/cartActions'
// import { useState } from "react";
// import { Modal } from 'react-bootstrap';
// import { Home } from './Home'

// export default function DisplayProduct(props) {
//     const [show, setShow]= useState(false);
//     const [showImge, setShowImge] = useState({});

//     const handleClose = () => setShow(false);
//     const handleShow = (product) => {
//         setShow(true);
//         setShowImge(product);
//     }
// }
// return(
//     <div>
//         {props.products.map(product => 
//             {
//                 return(
//                     <div key={item.id} className="border border-1 p-3">
//                         <h4 className="mx-5">{item.desc}</h4>
//                         <img 
//                             src={item.img}
//                             width="150"
//                             alt={item.title}
//                             className="mx-5"
//                             onClick={() => handleShow(item)}
//                         />
//                     <Modal show={show} onHide={handleClose}>
//                          <Modal.Header closeButton>
//                            <Modal.Title>{showImge.desc}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                     <img src={showImge.image} width="350" alt={showImge.desc} className="mx-5"/>
//                          <p><span className="text-dark">Ratings:</span>{showImge.ratings}/5</p>
//                         </Modal.Body>       
//                 </Modal>
//                )
//             }   
//         }
//     </div>
//                 );