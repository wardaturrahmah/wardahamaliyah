export default function text({value,color,margin,size,weight})
{
	return(
		<p style={{color:color,margin:margin,fontSize:size,fontWeight:weight}}
		>
		{value}
		</p>
		);

}