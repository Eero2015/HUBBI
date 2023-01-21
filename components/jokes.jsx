import React from 'react';

export default function Jokes(props) {
	return (
		<div className='set-up'>   
		     <h5 className='setup'>{props.setup}</h5>
		     <p className='punch'>{props.punchline}</p>
		</div>
		)
}