import React from 'react'
import DinosaurRide from '../../components/DinosaurRide/dinosaur-ride.js';
import './about.scss';
import HangingSign from '../../components/HangingSign/hanging-sign.js'

const AboutPage=(props)=>{
    return(
        <section id={props.id} className="section about-section" style={{height:props.sectionHeight}}>
          <div className="dinosaur-area">
            <DinosaurRide/>
          </div>
          <div className="about-area">
            {props.isActive?<HangingSign isVisible/>:<HangingSign />}
          </div>
        </section>
    )
}
export default AboutPage;