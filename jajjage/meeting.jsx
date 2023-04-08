import React from 'react';
import './meet.css';
import Data from './data';

export default function Meet () {
    const dat = Data.data
	return(
		<div className='main-sub'>
		    <div className='icon'>
		        <h2 className='heading'>
		            <span>{dat.anmt[1]}<span className='exclam'>{dat.exclam3}</span></span>
		            <span>{dat.anmt[1]}<span className='exclam'>{dat.exclam3}</span></span>
		            <span>{dat.anmt[1]}<span className='exclam'>{dat.exclam3}</span></span>
		        </h2>
			    <img className= 'icon-image' src={dat.img}/>
			</div>
			<section className='section'>
			    <div className='section-heading'>
			        <span>{dat.mtng[0]} {dat.anmt[2]}<span className='exclam'>{dat.exclam3}</span></span>
			        <span>{dat.mtng[0]} {dat.anmt[2]}<span className='exclam'>{dat.exclam3}</span></span>
			        <span>{dat.mtng[0]} {dat.anmt[2]}<span className='exclam'>{dat.exclam3}</span></span>
			     </div>
                <div className='props-content content-p'>
                  <p className='greeting'>
                     {dat.slm}<span className='exclam'>{dat.exclam2} </span> 
                     {dat.grtng}<span className='exclam'>{dat.exclam2}</span>
                  </p>
                   <p className='invit'>
                    {dat.invit} to the <span className='first-meeting'>{dat.mtng[1]} {dat.anmt[3]}<span className='exclam'>{dat.exclam3}</span></span> of {dat.other[0]}.
                  </p>
                  <h3 className='schedule'>{dat.sch.txt}</h3>
                <ul className ='hgroup'>
            	    <li><h2>DATE : {dat.sch.date}.</h2></li>
            	    <li><h2>TIME : {dat.sch.time}.</h2></li>
            	    <li><h2>VENUE : {dat.sch.ven}.</h2></li>
                </ul>
                <footer className= 'footer'>
                  
            	   <div className='footer-div'><h2>{dat.other[1]} : {dat.phone}</h2></div>
            	   <div className='thanks'>
            	       <h2>{dat.tnx}{dat.exclam3}</h2>  
            	       <h2>{dat.tnx}{dat.exclam3}</h2> 
            	       <h2>{dat.tnx}{dat.exclam3}</h2>
            	   </div>
                </footer>
            </div>
            </section>
		</div>
		)
}