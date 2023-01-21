import React from 'react'

export default function Card () {
	return (
		<div className='card'>
			<img className='card--img' src='../images/katie-zaferes.png'/>
			<div className='card--stats'>
				<img className='stats--star' src='../images/star.png'/>
			    <span>5.0</span>
			    <span className='grey'>(6) .</span>
			    <span className='grey'>USA</span>
			    <p className='stats--text1'>Life lessons with kate zaferes</p>
			    <p><span className='bold'>From $136</span>/person</p>
			</div>
		</div>
		)
}