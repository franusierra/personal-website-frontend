import React from 'react'
import './floating-polaroid.scss';
var ReactFitText = require("react-fittext")
const FloatingPicture=(props) =>{
    return (
        <div className="my-picture">
            <img src={props.face_src}  className="my-face" alt="face" />
            <img src={props.frame_src} className="my-frame" alt="frame" />
            <ReactFitText >
                <h2 className="my-name">Fran Núñez</h2>
            </ReactFitText>
        </div>
    )
   
}

export default FloatingPicture;