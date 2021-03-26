import React from 'react'
import './hanging-sign.scss';
import rope from './rope.png'
import { Link } from "react-scroll";
const HangingSign=(props) =>{
    function getLang() {
        if (navigator.languages != undefined) 
          return navigator.languages[0]; 
        return navigator.language;
      }
      const selectResumeLanguage=()=>{
        const language=getLang()
        console.log(language)
        if(language.match(/es.*/)){
          return "https://franusi.com/resume-es.pdf"
        }else{
          return "https://franusi.com/resume-en.pdf"
        }
      }
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
                        <a href={selectResumeLanguage()} target="_blank"><div className="resume-button">Resume</div></a>
                        <Link 
                            activeClass="active"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            duration={250}
                            containerId="app">
                                <div className="contact-button mobile-show" >Contact</div>
                                <div className="contact-button mobile-hidden" >Contact Me</div>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
        </div>   
    )
}

export default HangingSign;