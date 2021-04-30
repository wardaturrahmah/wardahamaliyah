import Imagek from "../atoms/image"
import Textk from "../atoms/text"
export default function product({name,category,price,img,click})
{
	return (
		<>
			<div className="col-md-3 mt-3">
	            <div className="p-4 text-left text-light" style={{background:"#024aca",borderRadius:"10px"}}>
			        <Imagek name="mb-3" width="100%" height="156px" image={img} size="contain" border="none"/>
			        <Textk value={name} size="14px" weight="bold" />
			        <Textk value={category} size="9px" margin="-10px 0px 20px 0px" />
			        <div className="row">
			         	<div className="col-md-8">
			            	<Textk value={price} size="18px" weight="bold" />
			          	</div>
			          	<div className="col-md-4">
			           		<img className="mr-4" src="/home/cart.png" onClick={click}/>
			          	</div>
			        </div>
			    </div>
	        </div>
		</>
		);
}