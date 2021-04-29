import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
export default function hdr()
{
	return(
		 <Navbar variant="dark" style={{background:"#000"}}>
		    <Navbar.Brand href="#home"><img src="/home/ic.jpg" height="30px"/></Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link className="text-light" href="#home">Tren</Nav.Link>
		      <Nav.Link className="text-light" href="#features">Collection</Nav.Link>
		      <Nav.Link className="text-light" href="#pricing">Explore</Nav.Link>
		      <Nav.Link className="text-light" href="#pricing">About us</Nav.Link>

		    </Nav>
		    <Form inline>
		     	<img className="mr-4" src="/home/cart.png" />
		     	<img className="mr-4" src="/home/user.png" />

		    </Form>
		  </Navbar>
		);

}