import React from 'react'
import './floating-polaroid.scss';
import polaroid from './img/polaroid.png'

var ReactFitText = require("react-fittext")
const FloatingPicture=(props) =>{
    return (
        <div className="my-picture">
            <img src={props.face}  className="my-face" alt="face" />
            <img src={polaroid} className="my-frame" alt="frame" />
            <ReactFitText >
                <h2 className="my-name">{props.name}</h2>
            </ReactFitText>
        </div>
    )
   
}

export default FloatingPicture;