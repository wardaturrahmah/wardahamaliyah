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
  const product=list_product();
  const id=router.query.id;
  const check = product.filter(
      (data) => data.id == id
    );
  
  //console.log(product[0]);
  // /console.log(check[0].name);
  return (
    <>
      <Hdr />
      <center>
        <div className="row container mt-5">
          <div className="col">
            <Imagek image={check.length? check[0].image[0]: "/products/product_2.svg"} width="360px" height="360px" size="100%" />
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
              value={check.length ? check[0].name : "Title"}
              size="28px"
              weight="bold"
            />
            <Textk value={check.length ? check[0].category : "Category"} size="18px" color="9D9D9D" />
            <Textk value={check.length ? check[0].price : "Price"} size="36px" weight="bold" marginTop="-15px" />
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
