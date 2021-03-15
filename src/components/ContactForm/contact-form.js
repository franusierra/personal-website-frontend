import React from "react";
import './contact-form.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faBeer } from "@fortawesome/free-solid-svg-icons";

const ContactForm= (props) =>{ 
    return (
        <div className="container">
            <form>
                <h2>Let's talk!</h2>
                <p>If you want to meet up for a <span>Beer <FontAwesomeIcon icon={faBeer}/></span> or talk about 
                anything you can fill out the form or send an email directly to  
                <a href="mailto:franusierra@gmail.com"> <FontAwesomeIcon icon={faEnvelope}/> franusierra@gmail.com </a> 
                and I will answer as fast as possible.</p>
                <ul>
                    <li>
                        <label for="name"><span>Name <span className="required-star">*</span></span></label>
                        <input type="text" id="name" name="user_name"/>
                    </li>
                    <li>
                        <label for="mail"><span>Email <span className="required-star">*</span></span></label>
                        <input type="email" id="mail" name="user_email"/>
                    </li>
                    <li>
                        <label for="msg"><span>Message</span></label>
                        <textarea rows="4" cols="50"></textarea>
                    </li>
                    <li>
                        <input type="submit"/>
                    </li>
                </ul>
            </form>
        </div>
    )
}
export default ContactForm