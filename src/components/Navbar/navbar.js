import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactSVG } from 'react-svg'
import curriculum from "../../res/curriculum-vitae.svg"
export default function Navbar(props) {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };
  function getLang() {
    if (navigator.languages != undefined) 
      return navigator.languages[0]; 
    return navigator.language;
  }
  const selectResumeLanguage=()=>{
    const language=getLang()
    console.log(language)
    if(language.match(/es.*/)){
      return "https://franusi.com/resume-es.pdf"
    }else{
      return "https://franusi.com/resume-en.pdf"
    }
  }
  
  return (
    <header>
      <nav>
        {toggleState ?
          <FontAwesomeIcon icon={faTimes} className="fLink" aria-hidden="true" onClick={toggle} />:
          <FontAwesomeIcon icon={faBars} className="fLink" aria-hidden="true" onClick={toggle} />
        }
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
          {
            props.sections.map((element)=>{
              return (
                <Link 
                  activeClass="active"
                  to={element.id}
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId={props.containerId}
                  onSetActive={props.handleSetActive}
                  onSetInactive={props.handleSetInactive}
                  onClick={()=>{setToggleState(false)}}
                >
                  <li key={element.content}>{element.content}</li>
                </Link>
              )
            })
          }
          <ul className="external-icons">
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/franusi/">
                <FontAwesomeIcon icon={faLinkedin}  aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/franusierra">
                <FontAwesomeIcon icon={faGithubSquare} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a target="_blank" href={selectResumeLanguage()}>
                <ReactSVG  className="curriculum fLink" src={curriculum} />
              </a>
              
            </li>
            
          </ul>
          
            
        </ul>
      </nav>
    </header>
  );
}