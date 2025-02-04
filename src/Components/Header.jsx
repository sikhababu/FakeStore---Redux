import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import CartPage from '../Pages/CartPage';


function Header() {



    return(
<>
        <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>

        <div className="d-flex flex-column text-white">
        <Navbar.Brand>Fake Store</Navbar.Brand>
        <p className="fw-light">Your one-stop shop for demo products</p>
        </div>

 {/*     <Button variant="success">Cart Items {cartItems.length}</Button> */}
 <CartPage />
    
      </Container>
    </Navbar>
    
    
    
    </>
    )
    }
    
    export default Header