import React from 'react'
import Output from './output'

export default function Form (props) {

	return (
		<main className='main-form'>
		  <div className='form'>
			<input 
			type='text' 
			className='mem-input'  
			placeholder= 'top text' 
			name='topText' 
			onChange={props.handleChange}
	        value={props.meme.topText}
		
			/>

			<input 
			type='text' 
			className='mem-input'  
			placeholder= 'bottom text' 
			name='bottomText' 
			onChange={props.handleChange}
			value={props.meme.bottomText}

			/>

			<button 
			type='button' 
			className='get-img-btn' 
			onClick={props.handleClick}>
			    <span 
			    className='btn-text'>  
			        {props.buttonText} 
			    </span>
			</button>
		  </div>
		  <Output 
		    alt='meme image here'
			img ={props.meme.randomImage}
			firstInput={props.meme.topText}
			secondInput={props.meme.bottomText}/>
		</main>
		)
}