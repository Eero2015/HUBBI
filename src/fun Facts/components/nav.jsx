import React from 'react'
import logo from './images/react-logo.png'
//import './App.css'
export default function Nav() {
	return(
	  <nav className="nav">
		<img src={logo} className="nav-image"/>
		<h3 className="nav-logo-text">ReactCourse-project</h3>
		<h4 className="nav-title">ReactCourse-project 1</h4>
	</nav>
	)
}
