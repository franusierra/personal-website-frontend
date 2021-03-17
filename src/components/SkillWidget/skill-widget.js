import React from 'react';
import './skill-widget.scss';

const Skill = ({title,image,delay,isVisible})=>{
    console.log("Delay:",delay)
    return <div className={isVisible?"skill-container visible":"skill-container"} style={{'animation-delay': delay+'s'}}>
        <div className="skill-image-container">
            <img src={image} alt={title}/>
        </div>
        
        <p>{title}</p>
    </div>
}

const SkillWidget = ({skills,marginWidth,isVisible})=>{
    return <div className="skill-widget">
        <div style={{width:marginWidth}}></div>
        <div style={{width:marginWidth}}></div>
        {        
            skills.map((skill,i)=>{
                return <Skill title={skill.title} image={skill.image} delay={0.1*(i/2)} isVisible={isVisible}/>;
            })
        }
        <div style={{width:marginWidth}}></div>
        <div style={{width:marginWidth}}></div>
    </div>
}
export default SkillWidget;