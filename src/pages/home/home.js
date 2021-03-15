import React from 'react'
import FloatingPolaroid from '../../components/FloatingPolaroid/floating-polaroid.js'
import face from '../../res/face.jpeg';
import './home.scss';

const homepage=(props)=>{
  
    
    return(
        <section id={props.id} className="home-section" style={{height:props.sectionHeight}}>
          <div className="picture-area">
            <FloatingPolaroid name="Fran Núñez"  face={face}/>
          </div>
          <div className="introduction-area">
            
            <h2 className="description">I am a Software Engineer specialized on DevOps and Cloud architectures.</h2>
              
            
            <div className="cooltext">
              <h2>I solve problems;</h2>
            </div>
          </div>
          
        </section>
    )
}
export default homepage;