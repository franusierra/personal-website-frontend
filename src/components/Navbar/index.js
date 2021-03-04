import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./index.scss";

export default function Navbar() {
  const [toggleState, setToggleState] = useState(false);

  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
    <header>
      <nav>
        <i className="fLink fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
            <Link 
             to="section-1"
             spy={true}
             smooth={true}
             duration={500}
            >
              <li>home.js</li>
            </Link>
            
            <Link to="section-2"
            spy={true}
            smooth={true}
            duration={500}
           >
            <li>about.sh</li>
            </Link>
            <Link to="section-3"
            spy={true}
            smooth={true}
            duration={500}
           >
            <li>skills.yml</li>
            </Link>
            <Link to="section-4"
            spy={true}
            smooth={true}
            duration={500}
           >
            <li>projects.py</li>
            </Link>
            <Link to="section-5"
            spy={true}
            smooth={true}
            duration={500}
           >
            <li>contact.me</li>
            </Link>
          
    
        </ul>
      </nav>
    </header>
  );
}