import React from 'react'

export default function Output(props) {
	return (
		<div className='mem-img-txts-div'>
			{props.img && <img className='mem-img' src={props.img}/>}
		    <h1 className='first-value'>
		        {props.firstInput.toUpperCase()}
		    </h1>
			<h1 className='second-value'>
			    {props.secondInput.toUpperCase()}
			</h1>
		</div>
		)
}