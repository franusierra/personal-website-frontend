import React from 'react'
import PsychicMe from '../../components/PsichicMe/psychic-me.js';
import ContactForm from '../../components/ContactForm/contact-form.js';
import './contact.scss';
const contactpage=(props)=>{
    return(
        <section id={props.id} className="contact-section" style={{height:props.sectionHeight}}>
          <div className="psychic-area">
            <PsychicMe/>
          </div>
          <div className="contact-area">
          </div>
        </section>
    )
}
export default contactpage;