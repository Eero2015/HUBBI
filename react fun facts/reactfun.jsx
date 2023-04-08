import React from "react"
import Navbar from "./components/react navbar"
import Main from "./components/react main"
import './react-fun-style.css'


export default function App() {
 const[colorMode,setColorMode] = React.useState(false)
    function toggleColor(e) {
        setColorMode(prevColorMode => !prevColorMode)
    }
    return (
        <div className="container">
            <Navbar color={colorMode}
            colorToggler ={toggleColor} />
            <Main color={colorMode}
            colorToggler={toggleColor}/>
        </div>
    )
}