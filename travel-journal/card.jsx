import React from 'react'

export default function Card (props) {
	console.log(props)
	return (
		   
		      <div className='card-sub'>
		        <img className='card-sub-img' src={`../images/${props.items.image}`}/>
                <div className='map-card-cont'><div className ='map'>
                  <img src={`../images/${props.icons[0].mapIcon}`} className ='map-icon'/>
                  <span className ='location'>{props.icons[0].location}</span>
                  <a className='map-links' href = {props.items.url} target = '_blank'>view on google maps</a>
               </div>
		       <div className='content'>
		         <h3 className='card-sub-title'>{props.items.title}</h3>
		         <date className='date'>{props.items.date}</date>
		         <p className='discription'>{props.items.discription}</p>
		      </div>
		      </div> 
		    </div> 
		)
}