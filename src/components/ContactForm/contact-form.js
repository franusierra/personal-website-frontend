import React from "react";
import './contact-form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBeer } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'


const ContactForm= (props) =>{ 
    return (
        <div className="container">
            <form>
                <h2>Let's talk!</h2>
                <p>If you want to meet up for a <a className="beer" target="_blank" href="https://estrellagalicia.es/">Beer <FontAwesomeIcon icon={faBeer}/></a> or talk about 
                anything you can fill out the form or send me an <a className="email" target="_blank" href="mailto:franusierra@gmail.com">Email <FontAwesomeIcon icon={faEnvelope}/> </a> 
                or you can also connect with me on <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/franusi/">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a></p>
                <div className="contact-buttons">
                    <a className="email-button" target="_blank" href="mailto:franusierra@gmail.com">Email <FontAwesomeIcon icon={faEnvelope}/> </a> 
                    <a className="linkedin-button" target="_blank" href="https://www.linkedin.com/in/franusi/">LinkedIn <FontAwesomeIcon icon={faLinkedin}/></a>
                </div>
            </form>
        </div>
    )
}
export default ContactForm