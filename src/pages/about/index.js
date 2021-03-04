import React from 'react'
import FloatingPicture from '../../components/FloatingPicture'
import frame from '../../res/frame.png';
import face from '../../res/my-face.png';
import './index.css';
const homepage=(props)=>{
    return(
        <section id={props.id} className="home-section">
          <div className="picture-area">
            <FloatingPicture frame_src={frame} face_src={face}/>
          </div>
          <div className="introduction-area">
            <div>
                <h2 className="name">Fran Núñez</h2>
                <h2 className="titulation">Software Engineer</h2>
            </div>
            
            <h2 className="definition">I solve problems;</h2>
            
          </div>
        </section>
    )
}
export default homepage;