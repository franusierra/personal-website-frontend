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
  const [scroll,setScroll] = useState(false)
  const [lastSection,setLastSection] =useState(false)
  const [active,setActive]=useState(undefined)
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
    
    function resetHeight(){
      // reset the body height to that of the inner browser
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    // reset the height whenever the window's resized
    window.addEventListener("resize", resetHeight);
    // called to initially set the height.
    resetHeight();
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
      element: <About name="about-section" id="about-section"/>,
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
            setLastSection(true)
          }else{
            setLastSection(false)
            console.log("not last section",active)
          }
        }}/>
        
        {navbarSections.map((section)=>{
          if(section.id===active)
            return React.cloneElement(section.element,{isActive:true})
          else
            return section.element
        })}
        
        <div className="scroll-animation">
          <Lottie          
            options={optionsScroll}
            width="100%"
            height="100%"
            isStopped={lastSection||!scroll}
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