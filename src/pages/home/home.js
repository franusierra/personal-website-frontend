import React from 'react'
import Typist from 'react-typist';
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
              <Typist cursor={{
                hideWhenDone:true,
                element: 'I',
                blink: true
              }}>
                I solve problems;
              </Typist>
            </div>
          </div>
          
        </section>
    )
}
export default homepage;