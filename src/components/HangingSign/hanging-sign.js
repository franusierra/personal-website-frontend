import React from 'react'
import './hanging-sign.scss';
import rope from './vrope.png'
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
                    <Link 
                        activeClass="active"
                        to="contact-section"
                        spy={true}
                        smooth={true}
                        duration={250}>
                            <div>Contact me</div>
                    </Link>
                </div>
            </div>
        </div>   
    )
}

export default HangingSign;