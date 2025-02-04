import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { AddToCart, RemoveCart } from '../features/cart/CartSlice';

//*         <span className="fw-bold">${item.price}</span> 

function ProductCard({ item }) {

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=>state.cart.value)

    return (
        <Card className="card">
            <Card.Img variant="top" src={item.image} className="card-img-top"  />
            <Card.Body className="card-body">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    
                    {item.description.slice(0, 100)}...
                   
                
            </Card.Text>
         

            <div className="d-flex justify-content-between align-items-center">
            
            <Link to ={`ProductDetail/${item.id}`}><Button variant="primary" size="sm" >View Product</Button></Link>
    


            {

                cartItems.some((product)=> product.id == item.id) ? <Button variant="dark" size="sm"  onClick={()=>dispatch(RemoveCart(item.id))}>Remove from Cart</Button> : <Button variant="success" size="sm"  onClick={()=>dispatch(AddToCart(item))}>Add to Cart</Button>

            }

            </div>
        </Card.Body>
    </Card >
  );
}

export default ProductCard;