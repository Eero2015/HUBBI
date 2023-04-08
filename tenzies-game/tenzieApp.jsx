import React from 'react'
import Dyes from './components/tenzieDies'
import { nanoid } from 'nanoid'
import './tenzie-styles.css'
import Confetti from 'react-confetti'
import Timer from './components/timer'


/*
  **save your best time  and lowest rolls to local storage
*/
export default function Tenzie () {
    
    const[time, setTime] = React.useState(0)

	const countsFromStorage = () => localStorage.getItem('rolls');

    const [tenzies,setTenzies] = React.useState(false);

    const [rollsCount,setRollsCount] = React.useState(0);

    const [prevRollsCount,setPrevRollsCount] = React.useState(countsFromStorage() ? 
    	                                       JSON.parse(countsFromStorage()): 1000);
	const [dice, setDice] = React.useState(()=> allNewDice())

    const diceElements = dice.map(
    	(dye) => <Dyes key = {dye.id}
    	               id={dye.id}
    	               onClick={()=> holdDye(dye.id)} 
    	               value={dye.value} 
    
    	               isHeld = {dye.isHeld}/>)
   

   React.useEffect(()=>{
   	    if(tenzies) {
   	    	localStorage.setItem('rolls',JSON.stringify(prevRollsCount))
   	    }
   },[tenzies])

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld);
        const firstValue = dice[0].value;
        if(allHeld && firstValue) {
        	setTenzies(true);
        	if(rollsCount < prevRollsCount) {
        		setPrevRollsCount(rollsCount)
        	}
        	
            
        }
    },[dice])

    React.useEffect(() => {
        const timer = setTimeout(()=>{setTime(prevTime => prevTime+1)},1300)
         return () => {if(tenzies){
         	setTime(0);
         	return clearTimeout(timer)

         }}
    },[time,tenzies])


    function generateNewDie() {
    	return {
    		    value : Math.ceil(Math.random() * 6), 
    	    	id : nanoid(), 
    	    	isHeld : false }
    }

    function allNewDice() {
    	let newArray = []
    	for (let i = 0; i < 10; i++) {
    	    newArray.push(generateNewDie());
    	}
    	
    	return newArray;
    }
    
    function rollDice() {
    	if(!tenzies) {
    		setRollsCount(prevRoll => prevRoll + 1 )
    		setDice(prevDice => prevDice.map(die=>{
             return die.isHeld ? die : generateNewDie()
    	}))
    	} else {
    		setTenzies(false)
    		setDice(allNewDice())
    		
    		
    	}
    	
    }

    function holdDye (id) {
    	
    	setDice(prevDice => prevDice.map(die => {
    		return die.id === id ?
    		      {...die,isHeld: !die.isHeld} :
    		      die
    	}))
        
    }

	return (

		<div className='tenzie-main'>
		    {tenzies && <Confetti 
		                  width={600} 
		                  height={600} 
		                  numberOfPieces ={1500}
		                  />}
			<div className='tenzie-container'>
			    {!tenzies && <Timer 
		        tenzies ={tenzies}
		        timer={time}
		        />}
			    <div 
			        className='tenzie-header'
			        >Tenzies</div>
			    <div className='tenzie-intro'>
			        Roll untill all 
			        dice are the same.
			        Click each dye to 
			        freeze it 
			        at its
			        current value 
			        between rolls.
			    </div>
			    <div className='tenzie-dice'>
			       {diceElements}	
			    </div>
			    <div className='tenzie-roll'>
			        <button 
			            onClick={rollDice}
			            >{tenzies ?'Start Game': 'Roll'}</button>
			    </div>
		    </div>
		</div>
		)
}