import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function hdr()
{
	const router = useRouter();
  	const [luser, setLuser] = useState("");
  	const handlelogin= () => {
  		if(luser=="")
  		{
  			router.push("/signin");	
  		}
  		else
  		{
  			router.push("/");	
  		}
  	};
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
		     	<img className="mr-4" src="/home/user.png" onClick={handlelogin} />
		    </Form>
		  </Navbar>
		);

}