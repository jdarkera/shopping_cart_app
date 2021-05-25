import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    }
    return (
        <div>
            {props.products.map(product => {
                return (
                    <div className="border border-1 p-3">
                        <h4 className="mx-5">{product.desc}</h4>
                        <img
                            src={product.image}
                            width="150"
                            alt={product.desc}
                            className="mx-5"
                            onClick={() => handleShow(product)}
                        />
                        <button
                            className="btn btn-secondary mx-3"
                            onClick={() => props.onIncrement(product)}
                        >
                            <FontAwesomeIcon icon={faPlusCircle} className="fas fa-md"/>
                        </button>
                        <button
                            className="btn btn-secondary mx-3"
                            onClick={() => props.onDecrement(product)}
                        >
                            <FontAwesomeIcon icon={faMinusCircle} className="fas fa-md" />
                        </button>
                        <div className="d-inline-block mx-4 text-center">
                            <span className="d-block mb-2">Quantity</span>
                            <span id="qty" className="px-3 py-2 border border-3 d-inline-block">{product.value}</span>
                        </div>
                    </div>
                )
            })}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{showImge.desc}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img
                                src={showImge.image}
                                width="350"
                                alt={showImge.desc}
                                className="mx-5"
                            />
                            <p><span className="text-dark">Ratings:</span> {showImge.rating}/5</p>
                        </Modal.Body>
                    </Modal>
        </div>
    )   
}