import React from 'react'

export default function Api() {
	const[apiData,setApiData]=React.useState({})

	const [count, setCount] = React.useState(1)
	React.useEffect(()=>{
	try{fetch(`https://swapi.dev/api/people/${count}`)
	     .then(res=>res.json())
	     .then(data=> setApiData(data))
	 } catch(e) {console.log(e)}},[count])
	return(
		<div>
		    the count is {count}
		    <br/>
		    <button onClick={()=> {setCount(prevCount => prevCount + 1)}}>Get next character</button>
			<pre>{JSON.stringify(apiData, null,2)}</pre>
			
			
		</div>
		)
}