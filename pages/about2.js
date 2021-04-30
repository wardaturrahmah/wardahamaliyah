import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Imagek from "../components/atoms/image";
import Productk from "../components/molecules/product";
import Contactk from "../components/molecules/contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar,Nav,Form,FormControl} from 'react-bootstrap';
import Hdr from "../components/organisms/hdr";
import {contact_list} from "../components/variables/contact";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home()
{
  const router = useRouter();
  let contact=contact_list();
  return (
    <>
    <Hdr />
     <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <Textk value="Kontak kami :" size="36px"  />
            {contact.map((con, index) => {
              return(
              <>
              <Contactk img={con.image} value={con.value}/>
              </>
              );
              
            })}
          </div>
          <div className="col mt-3">
            <Imagek
                  image="/home/beranda.svg"
                  height="280px"
                  width="400px"
                  radius="10px"
              />
          </div>
         </div>
      </center>
    </>
  );
}