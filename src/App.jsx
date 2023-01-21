import { useState } from 'react'
import Nav from '../components/nav bar'
import Hero from '../components/hero'
import Card from '../components/card'
import Contact from '../components/contact'
import '../styles.css'
  


function App() {
  const person = {
    img : "../images/mr-whiskerson.png",
    name : "mr- whiskerson",
    phone : "08164838863",
    email : "eero2015@gmai.com"
  }

  const {name, phone} = person;
  console.log(name);
  console.log(phone);
  return(
    <div className='contacts'>
       <Contact 
                img1="../images/mr-whiskerson.png" 
                img2='../images/mail-icon.png'
                img3='../images/phone-icon.png'
                name="Mr. Idris  Abdulkadir"
                phone="(234) 7062 311850"
                email="idrisabdulkadir291@gmail.com"
           />
       <Contact 
                img1="../images/pumpkin.png" 
                img2='../images/mail-icon.png'
                img3='../images/phone-icon.png'
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
       <Contact 
                img1="../images/fluffykins.png" 
                img2='../images/mail-icon.png'
                img3='../images/phone-icon.png'
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
        <Contact 
                img1="../images/felix.png" 
                img2='../images/mail-icon.png'
                img3='../images/phone-icon.png'
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
    </div>
    )
}


export default App;
