import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Link from "next/link";
export default function hdr()
{
	return(
		 <Navbar variant="dark" style={{background:"#000"}}>
		    <Link href="/">
		    <Navbar.Brand href="#home"><img src="/home/ic.jpg" height="30px"/></Navbar.Brand>
		    </Link>
		    <Nav className="mr-auto">
		      <Link href="/collection">
		      	<Nav.Link className="text-light" href="#features">Collection</Nav.Link>
		      </Link>
		      <Link href="/about">
		      	<Nav.Link className="text-light" href="#pricing">About us</Nav.Link>
		      </Link>

		    </Nav>
		    <Form inline>
		     	<img className="mr-4" src="/home/cart.png" />
		     	<img className="mr-4" src="/home/user.png" />

		    </Form>
		  </Navbar>
		);

}