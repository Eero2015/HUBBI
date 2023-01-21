import React from 'react'

export default function Contact(props) {
	return(
		<div className='contact-card'>
		    <img src={props.img1} className='contact--img' />
		    <h3 className='contact--name'>{props.name}</h3>
            <div className='info-group'>
                <img src={props.img3} />
                <p>{props.phone}</p>
            </div>
            <div className='info-group'>
                <img src={props.img2} />
                <p>{props.email}</p>
            </div>
		</div>
		)
}
