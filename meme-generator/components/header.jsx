import React from 'react'

export default function Header(props) {
    return(
    	<header className='header'>
    		   <div className='img-mem'>
    		   	   <img className='header-img' src={`../images/${props.img}`} />
    		       <span className='header-title'>{props.title}</span>
    		   </div>
    		   
    		   <span className className='header-reactCourse'>{props.course}</span>
    	</header>
    	)	
}