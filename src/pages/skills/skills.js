import React from 'react'
import './skills.scss';
import SkillWidget from '../../components/SkillWidget/skill-widget';

const Skills=(props)=>{
    const skillsMock=[];
    skillsMock.push({
      title: 'Grafana',
      image: 'https://codigo200.files.wordpress.com/2017/11/grafana-logo-300x300.jpg'
    })
    for(let i=0;i<11;i++){
      skillsMock.push({
        title: 'React.js',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/500px-React-icon.svg.png'
      })
    }
    return (
        <section id={props.id} className="skills-section" >
         
         <h2 className="skill-title" >These are some tools and concepts I am comfortable with.</h2>
            
          
          
          <SkillWidget  marginWidth="10vw" skills={skillsMock} isVisible={props.isActive}/>
        </section>
    )
}
export default Skills;