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
                </div>
            </div>  
            
        </div>   
           
        
    )
   
}

export default HangingSign;