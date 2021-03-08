import React, { useState } from "react";
import './contact-form.scss'
const ContactForm= (props) =>{ 
    return (
        <div class="container">
            <form>
                <h2>Contact Me!</h2>
                <ul>
                    <li>
                        <label for="name"><span>Name <span class="required-star">*</span></span></label>
                        <input type="text" id="name" name="user_name"/>
                    </li>
                    <li>
                        <label for="mail"><span>Email <span class="required-star">*</span></span></label>
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