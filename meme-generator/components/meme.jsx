import React from 'react'
import Header from './header'
import Form from './form'
import Box from './box'
import boxes from '../boxesData'
import '../mem-gen.css'


export default function Meme (props) {
	    const [meme, setMeme] = React.useState({
	    	topText : '',
	    	bottomText : '',
	    	randomImage : ""
	    });

        const [allMeme, setAllMeme] = React.useState([]);
       React.useEffect(() => {
       	 (async function myMemes () {
       	 	const res = await fetch('https://api.imgflip.com/get_memes')
       	 	const data = await res.json()
       	    setAllMeme(data.data.memes);	
       	 } 
       	 )()
      

       },[]) 

       
	    function getMemeImg() {
	       
	        let randNumb = Math.floor(Math.random() * allMeme.length);
	       
    	    setMeme(prevMeme => {
    	    	return (
    	    		{...prevMeme,
    	    	    randomImage : allMeme[randNumb].url})
    	    }) 
	    }


	    function handleChange(e) {
	    	const {name, value} = e.target
	    	setMeme(prevformData => ({
	    		...prevformData,
	    		[name] : value
	    	}))
	    }


        const [bokes,setBokes] = React.useState(boxes.map(object => <Box key = {object.id} id={object.id}
          	on = {object.on} toggle = {() => togglebokes(object.id)}/>));
      function togglebokes(id) {
      	setBokes((prevState) => {
      	    return prevState.map(obj => obj.props.id== id ? {...obj,props:{...obj.props, on: !obj.props.on}} : obj)
      	  
      	    })	
      }
   
	return (
		<div className='main' >

		{/*bokes*/}
        	
			<Header 
			img='troll-face.png'
			title='Meme Generator'
			course ='React Course - Project 3'/>
			<Form 
			meme = {meme}
			buttonText ='Get a new meme image  🖼'
			handleClick = {getMemeImg}
			handleChange={handleChange}/>

			
		</div>
		)
}