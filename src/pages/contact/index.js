import React from 'react'
import PsychicMe from '../../components/PsichicMe/psychic-me.js';
import './index.css';
const contactpage=(props)=>{
    return(
        <section id={props.id} className="contact-section">
          <div className="psychic-area">
            <PsychicMe/>
          </div>
          <div className="contact-area">
            
            
          </div>
        </section>
    )
}
export default contactpage;