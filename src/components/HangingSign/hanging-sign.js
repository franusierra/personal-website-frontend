import React from 'react'
import './hanging-sign.scss';
import rope from './rope.png'
import { Link } from "react-scroll";
import Projects from '../../pages/projects/projects';
const HangingSign=(props) =>{

    return (
        <div className={`hanging-sign ${props.isVisible ? "appear":"dissappear"}`}>
            <div className="shake">
                <img src={rope}  className="left-rope" alt="Left rope"/>
                <img src={rope}  className="right-rope" alt="Right rope"/> 
                <div className="sign">
                    <h2 className="sign-title">About me</h2>
                    <p>Hello, my name is Fran Núñez. I am a puzzle "aficionado" and I was thrilled by how computers works from a young age.</p>
                    <p className="mobile-hidden">I am a self-learner determined in improving my software skills, good crítical thinking and creative problem solver.</p>
                    <p>I have freelancing experience for local an remote projects. My main area of knowledge are Cloud applications I have interest in a wide range of cool technologies.</p>
                    <div className="about-buttons">
                        <Link 
                            activeClass="active"
                            to="projects-section"
                            spy={true}
                            smooth={true}
                            duration={250}
                            containerId="app">
                                <div className="mobile-hidden projects-button" >Le projects</div>
                        </Link>
                        <a href="http://franusi.com/resume.pdf" target="_blank"><div className="resume-button" >Check out my CV</div></a>
                        <Link 
                            activeClass="active"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            duration={250}
                            containerId="app">
                                <div className="contact-button" >Contact me</div>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>   
    )
}

export default HangingSign;