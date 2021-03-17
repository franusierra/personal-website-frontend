import React from 'react'
import './projects.scss';
import WorkingMe from '../../components/WorkingMe/working-me';
const Projects=(props)=>{
    return(
        <section id={props.id} className="projects-section" style={{height:props.sectionHeight}}>
          <div className="working-area">
            <WorkingMe/>
          </div>
          <div className="projects-area">
            
          </div>
        </section>
    )
}
export default Projects;