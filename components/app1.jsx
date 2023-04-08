import React from 'react';
import Joke from './jokes'
import '../styles.css'
import Data from './jokesData'


export default function App1() {
	const jokesData = Data.map(i => <Joke setup = {i.Setup} punchline = {i.Punchline} />)

	const [messages, setMessages] = React.useState(new Array())
	return (
		<div className='main'>
		   {/* <h4 className='jokes'>Some Awesome Jokes :</h4>
		    {jokesData} */}
		 
		</div>
		)
}
