import Textk from "../atoms/text";
import { Button, Navbar,Nav,Form,FormControl,Row,Col} from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { user,check_login,set_login } from "../variables/user";
import Modal from 'react-bootstrap/Modal'
import { listCart,list_product } from "../variables/product";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
export default function hdr()
{
	let cart=listCart;
	let jum=cart.length;
	let product=list_product;
	const router = useRouter();
  	const handlelogin= () => {
  		if(check_login()=="")
  		{
  			router.push("/signin");	
  		}
		
  	};
  
	const [show, setShow] = useState(false);

	return(
		<>
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
		    	
		     	<img className="mr-4" src="/home/cart.png" onClick={() => setShow(true)}/>
		     	<img className="mr-4" src="/home/user.png" onClick={handlelogin} />
		     	<Textk value={check_login()} color="white" name="mt-3"/>
		    </Form>
		  </Navbar>
		  <Modal
		        show={show}
		        onHide={() => setShow(false)}
		        dialogClassName="modal-90w"
		        aria-labelledby="example-custom-modal-styling-title"
		      >
		        <Modal.Header closeButton>
		          <Modal.Title id="example-custom-modal-styling-title">
		            Cart
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		         {cart.map((cart, index) => {
		          return(
		          <>
		          	<div className="row">
		          		<div className="col-md-8">
		          			<div className="ml-4">
		          				<Textk value={cart.product} />	
		          			</div>
		          		</div>
		          		<div className="col-md-4">
		          			<Textk value={cart.qty} />
		          		</div>
		          	</div>

		          </>
		          );
		          })}
		          <div className="row">
		          		<div className="col-md-8">
		          			<div className="ml-4">
		          				<Textk value="TOTAL" />	
		          			</div>
		          		</div>
		          		<div className="col-md-4">
		          			<Textk value={jum} />
		          		</div>
		          	</div>

		        </Modal.Body>
		      </Modal>
		  </>
		);

}
