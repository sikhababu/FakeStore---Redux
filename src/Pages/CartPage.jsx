import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';


  
function CartPage() {

    const cartItems = useSelector((state)=>state.cart.value)

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Cart Items {cartItems.length}
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart Items</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {
                 cartItems.map((product)=> (
                    <ProductCard item ={product}/>

                 ))

            }
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default CartPage
