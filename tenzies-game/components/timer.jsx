import React from 'react'

export default function(props) {
    const timer = new Date(0,0,1,0,0,props.timer);
    

	return (<div className='timer'>
		<span className='timer-comp'>{timer.getHours()}</span> : 
		<span className='timer-comp'>{timer.getMinutes()}</span> : 
		<span className='timer-comp'>{timer.getSeconds()}</span>
	</div>
	)
}