import React from 'react'

export default function Dyes(props) {

	const divArray = new Array(props.value).fill(
                   {id : `${props.value}${props.value}${props.value}`})
    const styles ={
   	backgroundColor : props.isHeld ? '#59E391' : '#FFFFFF',
   	color : props.isHeld ? 'black' : '#2B283A',
    
   }

	return (
	    <div 
			   className='tenzie-Dyes' 
			   style={styles}
			   onClick={props.onClick}>
			   {divArray.map((array,i) => <div 
			   	    key={array.id + i} 
		            className={`em${array.id+i}`}></div>)}
	    </div>
		)
}