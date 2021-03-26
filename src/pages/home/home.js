import React from 'react'
import FloatingPolaroid from '../../components/FloatingPolaroid/floating-polaroid.js'
import face from '../../res/face.jpeg';
import './home.scss';
import Typewriter from 'typewriter-effect/dist/core';

const homepage=(props)=>{
  var app = document.getElementById('typewriter');
 
  var typewriter = new Typewriter(app, {
    loop: true,
    cursor:"I",
    delay: 50,
    deleteSpeed: 25
  });
  const coolPhrases=[
    "solve problems",
    "write code",
    "design infraestructure",
    "achieve solutions",
    "manage systems",
    "build pipelines"
  ]
  coolPhrases.forEach((phrase)=>{
    typewriter
      .pauseFor(1000)
      .typeString(phrase+";")
      .pauseFor(500)
      .deleteChars(phrase.length+1)
  })
  typewriter.start();
    
    return(
        <section id={props.id} className="home-section" style={{height:props.sectionHeight}}>
          <div className="picture-area">
            <FloatingPolaroid name="Fran Núñez"  face={face}/>
          </div>
          <div className="introduction-area">
            
            <h2 className="description">I am a Software Engineer specialized on DevOps and Cloud architectures.</h2>
              
            
            <div className="cooltext">I <span id="typewriter"/></div>
          </div>
        </section>
    )
}
export default homepage;