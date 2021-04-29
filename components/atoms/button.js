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
			margin : margin ? margin : "10px",
			borderRadius:radius ? radius : "10px",
			padding : padding}}
		onClick={click}
		>
		{value}
		</button>
		);

}