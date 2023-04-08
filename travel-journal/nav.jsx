import React from 'react'

export default function Nav (props) {
	return <nav className = 'nav' >
		       <div className='nav-content'>
		 	       <img className='nav-img' src = {`../images/${props.worldIcon}`}/>
		 	       <span className='nav-text'>my travel journal</span>
		       </div>
	</nav>
}