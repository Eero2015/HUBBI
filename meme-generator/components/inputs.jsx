import React from 'react'

export default function Inputs(props) {
	return (
			<div className='input-div'>
				<input type='text' value= {`${props.firstInput}`} id='first' className ='mem-input'/>
				<input type='text' value={`${props.secondInput}`} id= 'second' className='mem-input' />
			</div>
		)
}