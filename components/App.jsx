import { useState } from 'react'
import Nav from './nav bar'
import Hero from './hero'
import Card from './card'
import Contact from './contact'
import Data from './data.js'
import '../styles1.css'
  


function App() {

     const card = Data.map(data => <Card 
      key = {data.id}
      item = {{...data}}

       />)
     
  return(
    <div className='contacts'>
       <Nav />
       <Hero />
       <section className='cards-list'>
            {card}
       </section>   
    </div>
    )
}


export default App;
