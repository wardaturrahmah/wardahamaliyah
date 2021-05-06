import Textk from "../../components/atoms/text";
import Buttonk from "../../components/atoms/button";
import Imagek from "../../components/atoms/image";
import Productk from "../../components/molecules/product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Hdr from "../../components/organisms/hdr";
import {list_product} from "../../components/variables/product";
import { useRouter } from "next/router";
import Link from "next/link";

export default function detail() {
  const router = useRouter();
  const products=list_product();
 
  return (
    <>
      <Hdr />
      <center>
        <div className="row container mt-5">
          <div className="col">
            <Imagek image="/products/product_2.svg" width="360px" height="360px" size="55%" />
            <div className="row mt-3" style={{width:"75%"}}>
              <div className="col">
                <Imagek image="/products/product_1.svg" />
              </div>
              <div className="col">
                <Imagek image="/products/product_2.svg"/>
              </div>
              <div className="col">
                <Imagek image="/products/product_3.svg"/>
              </div>
            </div>
          </div>
          <div className="col text-left">
            <Textk
              value="tes"
              size="28px"
              weight="bold"
            />
            <Textk value="tes" size="18px" color="9D9D9D" />
            <Textk value="Rp.50000  " size="36px" weight="bold" marginTop="-15px" />
            <Textk
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            <Buttonk
              customClass="mt-5"
              value="Add to Cart"
              background="#0086CF"
              color="#FFF"
              padding="5px 30px"
              border="none"
              radius="10px"
            />
          </div>
        </div>
      </center>
    </>
  );
}
