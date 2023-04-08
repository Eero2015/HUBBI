import React from "react"
import logo from './images/react-icon-small.png'

export default function Navbar(props) {

    return (
         <nav className ={props.color ? 'dark' : ''}
           
         >
            <img 
                className="nav--logo_icon"
                src={logo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
                onClick={props.colorToggler}
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}