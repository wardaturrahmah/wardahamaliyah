import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Imagek from "../components/atoms/image";
import Productk from "../components/molecules/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Hdr from "../components/organisms/hdr";
import {star_list} from "../components/variables/star_list";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home()
{
  const router = useRouter();
  let star=star_list();
  const handlecart= () => {
  		router.push("/billing");
  	};
  return (
    <>
    <Hdr />
    <center>
      <div className="row container mt-5">
        <div className="col-md-6 text-left">
          <Textk value="TERSERAH TOKO" size="48px" weight="bold" color="#024aca"/>
          <Textk value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" size="16px" />
          <div className="row mt-5">
            <div className="col-md-5 mt-3">
              <Buttonk value="Browse all product" color="white" bg="#024aca" />
            </div>
            <div className="col-md-5 mt-3">
              <Buttonk value="Follow this board" color="#024aca" bg="#F0F0F0" margin="0px"/>
            </div>
          </div>
        </div>
        <div className="col-md-6"><img src="/home/beranda.svg" /></div>

      </div>

      <div className="mt-5 pt-5" style={{width:"100%",height:"512px",background:"#F9F9F9"}}>
        <center>
        <div className="row container">
        	<Textk value="Best Seller products" size="30px" color="#024aca" weight="bold" />
        </div>
        <div className="row container">
         {star.map((product, index) => {
         	return(
         	<>
         	  <Productk img={product.image[0]} name={product.name} category={product.category} price={product.price} index={index} click={handlecart} go="/product/[id]" />
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