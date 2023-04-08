import React from 'react';

export default function Jokes(props) {
	const [isShown, setIsShown] = React.useState(false);
	function toggle() {
		setIsShown(prevState => !prevState)
		console.log(isShown);
	}
	return (
	    <div className='set-up'>{props.setup &&<h5 className='setup'>setup : {props.setup}</h5>}
		      {isShown && <p className='punch'>punchline : {props.punchline}</p>}
		      <div><button onClick={toggle}>{isShown ? "hide" : "show"} punchline</button></div>
		</div>
		)
}