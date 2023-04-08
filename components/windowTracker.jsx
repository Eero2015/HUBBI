import React from 'react'

export default function WindowT() {
	const [show,setShow] = React.useState(true)
	const[windowWidth,setWindowWidth] = React.useState(window.innerWidth)
	
	React.useEffect(()=>{

		let  watchWidth = () => {
			console.log('setting up...')
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', watchWidth)
		return () => {
			
			window.removeEventListener('resize',watchWidth)
		    console.log('cleaning up...')}
	}, [])

	function WindTrac() {
		return (
			<h1>window width : {windowWidth}</h1>
			)
	}
     


	return(
		<div>
		    <button onClick={() => {setShow(prevShow => !prevShow)}}>Toggle WindowTracker</button>
            {show && <WindTrac />}
		</div>
		)
}