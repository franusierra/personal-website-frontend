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
    const finalSkills=[]

    skills.forEach((skill,i,array)=>{
        console.log(i,skill)
        if(i<array.length/2){
            finalSkills[2*i]=skill
        }else{
            finalSkills[2*(i-array.length/2)+1]=skill
        }
    }
    )
    return <div className="skill-widget">
        <div style={{width:marginWidth}}></div>
        <div style={{width:marginWidth}}></div>
        {        
            finalSkills.map((skill,i)=>{
                console.log(i,skill)
                return <Skill title={skill.title} image={skill.image} delay={0.1*(i/2)} isVisible={isVisible}/>;
            })
        }
        <div style={{width:marginWidth}}></div>
        <div style={{width:marginWidth}}></div>
    </div>
}
export default SkillWidget;