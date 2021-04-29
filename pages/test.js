import Textk from "../components/atoms/text"
import Buttonk from "../components/atoms/button"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';

export default function test()
{
	return (
		<>
		 <Navbar variant="dark" style={{background:"#000"}}>
		    <Navbar.Brand href="#home"><img src="/home/ic.jpg" height="30px"/></Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#home">Tren</Nav.Link>
		      <Nav.Link href="#features">Collection</Nav.Link>
		      <Nav.Link href="#pricing">Explore</Nav.Link>
		      <Nav.Link href="#pricing">About us</Nav.Link>

		    </Nav>
		    <Form inline>
		     	<img className="mr-4" src="/home/cart.png" />
		     	<img className="mr-4" src="/home/user.png" />

		    </Form>
		  </Navbar>
		<Textk value="Apa itu Apple" size="32px"/>
		<Textk value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size="12px"/>
		<Buttonk value="Read more" bg="red" color="white" padding="10px 20px"/>
		</>
	);
}