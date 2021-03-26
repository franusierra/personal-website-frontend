import React, {useEffect,useState,useRef}  from 'react';
import './index.scss';
import { hydrate } from "react-dom";
import Home from "./pages/home/home.js"
import About from "./pages/about/about.js"
import Contact from "./pages/contact/contact.js"
import Lottie from "react-lottie"
import scrollAnimation from './res/scroll-down.json'
import Navbar from './components/Navbar/navbar.js';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';

export default function App() {
  let scrollTimer = useRef(null)
  let lastSection = useRef(false)
  const [active,setActive]=useState(undefined)
  const startScrollDelay=1000
  const reappearScrollDelay=2000
  const scrollLottieRef=useRef(null);
  console.log(scrollLottieRef)
  const scrollTimeout=() => {
    console.log(lastSection.current)
    if(!lastSection.current){
      if(scrollLottieRef.current){
        console.log("reproduciendo pero ",lastSection)
        scrollLottieRef.current.play();
      }else
        setTimeout(scrollTimeout,startScrollDelay)

    }
    
  }
  const handleScroll=(event)=>{
    
    if(scrollTimer.current){
      clearTimeout(scrollTimer.current)
      if(scrollLottieRef.current){
        scrollLottieRef.current.stop();
      }
    }
    scrollTimer.current = setTimeout(scrollTimeout,startScrollDelay);
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll,true)
    scrollTimer.current = setTimeout(scrollTimeout,reappearScrollDelay);
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
  const navbarSections=[
    { element: <Home name="home-section" id="home-section"/>,
      id:"home-section",
      content:"home.js"
    },
    {
      element: <About name="about-section" id="about-section" />,
      id:"about-section",
      content:"about.sh"
    },
    { element: <Skills name="skills-section" id="skills-section"/>,
      id:"skills-section",
      content:"skills.yaml"
    },
    { element: <Projects name="projects-section" id="projects-section"/>,
      id:"projects-section",
      content:"projects.py"
    },
    {
      element:  <Contact name="contact-section" id="contact-section"/>,
      id:"contact-section",  
      content:"contact.me"
    }
  ]
    
  
  return (
      <div id="app" className="app">
        
        <Navbar containerId="app" sections={navbarSections} handleSetActive={(active)=>{
          setActive(active)
          if(active===navbarSections.slice(-1)[0].id){
            console.log("last section")
            lastSection.current=true
          }else{
            lastSection.current=false
            console.log("not last section",active)
          }
        }}/>
        
        {navbarSections.map((section)=>{
          let isActive= (section.id===active)
          return React.cloneElement(section.element,{
              isActive:isActive
          })
        })}
        
        <div className="scroll-animation">
          <Lottie          
            ref={scrollLottieRef}
            options={optionsScroll}
            width="100%"
            height="100%"
            isStopped="true"
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