
import React from 'react';
import { TimelineMax, TweenMax, Power0 } from "gsap";
import { ReactSVG } from 'react-svg'
import psychicsvg from './contact_image.svg'
import "./psychic-me.scss"
const animatePsychicSVG=(error,svg)=>{
  // Actualiza el título del documento usando la API del navegador
  const letter = document.getElementById("Letter");
  const telekinesis = document.getElementById("Telekinesis");
  const hair = document.getElementById("TopHair");
  const lEye = document.getElementById("LeftPupil");
  const rEye = document.getElementById("RightPupil");
  TweenMax.set(letter, { transformOrigin: "50% 50%" });
  const timeline = new TimelineMax({});
  timeline.fromTo(letter, 2,{rotate:-10} ,{
  scaleX: 0,
  ease: Power0.easeIn,
  repeat: -1,
  rotate:10,
  yoyo: true
  },0);
  timeline.to(telekinesis, 2.2, {
  transformOrigin: "50% 50%",
  scaleX: 1.1,
  translateY: 0.9,
  rotate: 10,
  repeat: -1,
  ease: Power0.easeNone,
  yoyo: true
  },0);
  timeline.to(hair,0.5,{
      transformOrigin: "50% 50%",
      skewX:-8,
      repeat: -1,
      ease: Power0.easeNone,
      yoyo: true

  },0)
  timeline.play();
  const blink=new TimelineMax({repeat: -1, repeatDelay: 5});
  blink.to(rEye, 0.2, {
  transformOrigin: "50% 50%",
  scaleY: 0,
  ease: Power0.easeIn
  },0);
  blink.to(lEye, 0.2, {
  transformOrigin: "50% 50%",
  scaleY: 0,
  ease: Power0.easeIn
  },0);
  blink.to(rEye, 0.2, {
      transformOrigin: "50% 50%",
      scaleY: 1,
      ease: Power0.easeIn
  },0.2);
  blink.to(lEye, 0.2, {
      transformOrigin: "50% 50%",
      scaleY: 1,
      ease: Power0.easeIn
  },0.2);
  blink.play();

}
const PsychicMe=() => {
    return(
        <ReactSVG className="psychic-svg" src={psychicsvg}
        afterInjection={animatePsychicSVG}/>                      
    )
}
export default PsychicMe