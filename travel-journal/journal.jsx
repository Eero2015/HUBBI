import React from 'react';
import { data, icons} from './timeline'
import Nav from './nav'
import Card from './card'
import './styles11.css'

export default function Journal () {
	
	const elements = data.map((data,icon) => {
		return(
			    <Card
			    key = {data.id} 
			    items= {{...data}}
			    icons = {{...icons}}/>
			)}
	)

	return (
		<div className= 'main'>
		 <Nav 
		   worldIcon = {icons[0].worldIcon}/>
         <div className='card'>
         	{elements}
         </div>		
	    </div>
	)
}