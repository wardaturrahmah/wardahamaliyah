export default function button({bg,color,value,border,width,height,radius,margin,padding,click})
{
	return(
		<button 
		style={{
			background:bg ? bg : "white",
			color:color ? color : "black",
			border:border ? border : "none",
			width:width,
			height:height,
			margin : margin ,
			borderRadius:radius ? radius : "10px",
			padding : padding ? padding : "10px 20px"
			}}
		onClick={click}
		>
		{value}
		</button>
		);

}