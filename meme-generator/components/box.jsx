import React from 'react'

export default function Box(props){

      const styles = {
      	backgroundColor : props.on ? '#222222' : '#cccccc',
      	width : '100px',
      	height : '100px',
      	borderStyle : '1px solid black',
      	marginRight : '4px',
      	borderRadius : '5px',
      	display : 'inline-block',
      	position : 'relative'
      }
	return (
		<div onClick={props.toggle} style={styles}></div>
		)
}