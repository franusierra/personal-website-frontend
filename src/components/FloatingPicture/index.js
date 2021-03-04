import React from 'react'
import './index.css';

const FloatingPicture=(props) =>{
    return (
        <div className="my-picture levitate">
            <img src={props.face_src} className="my-face" alt="face" />
            <img src={props.frame_src} className="my-frame" alt="frame" />
        </div>
    )
   
}

export default FloatingPicture;