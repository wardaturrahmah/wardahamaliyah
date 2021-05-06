export default function text({value,color,margin,size,weight,name})
{
	return(
		<p style={{color:color,margin:margin,fontSize:size,fontWeight:weight}} className={name}>
		{value}
		</p>
		);

}