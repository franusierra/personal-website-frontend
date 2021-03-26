import React from 'react';
import {Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import website from './website-projects.png'
import sensors from './sensors-dashboard.png'

import './projects-widget.scss'
export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel 
                infiniteLoop 
                useKeyboardArrows  
                showStatus={false} 
                showIndicators={false} 
                showThumbs={false} 
                transitionTime={500} 
                interval={8000}>
                    
                <div className="project-card">
                    <img className="project-image" src={website} alt="Personal website image"/>
                    <h3 className="project-title">My personal website</h3>
                    <div className="project-content">
                        <p className="project-description">This website is built on AWS using Terraform for 
                        the Infrastructure and React for the Frontend. Everything, even my own resume is automated with
                        continuous deployment throuugh github actions </p>
                        <div className="project-buttons">
                            <a target="_blank" href="https://github.com/franusierra/personal-website-frontend">Frontend</a>
                            <a target="_blank" href="https://github.com/franusierra/personal-website-infraestructure">Infrastructure</a>
                            <a target="_blank" href="https://github.com/franusierra/resume">Resume</a>
                        </div>
                    </div>
                </div>  
                <div className="project-card">
                    <img className="project-image" src={sensors} alt="Personal website image"/>
                    <h3 className="project-title">Biometric Sensors</h3>
                    <div className="project-content">
                        <p className="project-description">In my college final project I made a Blood Oxygen, 
                        HeartRate and Temperature processing tool using Kubernetes Microservices 
                        on Edge Computing and open source tools like Grafana. Openfaas and Mqtt.</p>
                        <div className="project-buttons">
                            <a target="_blank" href="https://github.com/franusierra/biometric-sensors">Github Repo</a>
                        </div>
                    </div>
                </div>  
            </Carousel>
        </div>
    );
}