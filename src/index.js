import React, {useEffect,useState,useRef}  from 'react';
import './index.scss';
import { hydrate } from "react-dom";
import Home from "./pages/home/home.js"
import Contact from "./pages/contact/contact.js"
import Lottie from "react-lottie"
import scrollAnimation from './res/scroll-down.json'


function App() {
  let scrollTimer = useRef(null)
  const [scroll,setScroll] = useState(false)
  const startScrollDelay=1000
  const reappearScrollDelay=2000
  const handleScroll=(event)=>{
    
    if(scrollTimer.current){
      clearTimeout(scrollTimer.current)
      setScroll(false)
    }
    scrollTimer.current = setTimeout(() => {
      setScroll(true)
    }, startScrollDelay);
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll,true)
    scrollTimer.current = setTimeout(() => {
      setScroll(true)
    }, reappearScrollDelay);
    return () =>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  
  
  const optionsScroll ={
    loop: true,
    autoplay: false,
    animationData: scrollAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (


      <div className="app">
       
       <Home/>

      <Contact id="section-5"/>
        
      <div className="scroll-animation">
        <Lottie          
          options={optionsScroll}
          width="100%"
          height="100%"
          isStopped={!scroll}
        />
      </div>
        
        
      </div>
  );
}

const rootElement = document.getElementById("root");
hydrate(
  <App />,
  rootElement
);