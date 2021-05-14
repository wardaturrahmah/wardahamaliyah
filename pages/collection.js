import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Imagek from "../components/atoms/image";
import Productk from "../components/molecules/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Hdr from "../components/organisms/hdr";
import {list_product} from "../components/variables/product";
import { useRouter } from "next/router";
import { listCart } from "../components/variables/product";
import { user,check_login,set_login } from "../components/variables/user";
import Link from "next/link";
export default function Home()
{
  const router = useRouter();
  let products=list_product();
  const handlecart= (e) => {
      //console.log(e.target.id);
      if(check_login()=="")
      {
        router.push("/signin"); 
      }
      else
      {
        let cart = {
          username:check_login(),
          product:e.target.id,
          qty:1
        }
        listCart.push(cart);
        console.log(listCart[0].product);
      }
    
      //router.push("/billing");
    };
  return (
    <>
    <Hdr />
    <center>
      <div className="mt-5 pt-5" style={{width:"100%",height:"512px",background:"#F9F9F9"}}>
        <center>
        <div className="row container">
        	<Textk value="Our Products" size="30px" color="#024aca" weight="bold" />
        </div>
        <div className="row container">
         {products.map((product, index) => {
         	return(
         	<>
         	
          <Productk img={product.image[0]} name={product.name} category={product.category} price={product.price} index={index} aidi={product.id} click={handlecart} go="/product/[id]"/>
         	</>
         	);
          
      		})}
        </div>
        </center>
      </div>
    </center>
    </>
  );
}