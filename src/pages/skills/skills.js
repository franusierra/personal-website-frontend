import React from 'react'
import './skills.scss';
import SkillWidget from '../../components/SkillWidget/skill-widget';
import androidImg from './android.png';

const Skills=(props)=>{
    const skillsMock=[];
    skillsMock.push({
      title: 'AWS',
      image: 'https://lavca.org/wp-content/uploads/2019/10/aws-logo-square.png'
    })
    skillsMock.push({
      title: 'Terraform',
      image: 'https://www.terraform.io/assets/images/og-image-8b3e4f7d.png'
    })
    skillsMock.push({
      title: 'Kubernetes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/617px-Kubernetes_logo_without_workmark.svg.png'
    })
    skillsMock.push({
      title: 'Docker',
      image: 'https://avatars.githubusercontent.com/u/7739233?s=200&v=4'
    })
    skillsMock.push({
      title: 'Microservices',
      image: 'https://hackr.io/tutorials/learn-microservices/logo/logo-microservices?ver=1557508246'
    })
    skillsMock.push({
      title: 'Serverless',
      image: 'https://miro.medium.com/max/300/1*pD_69wpCMvY4fxAetly_AA.png'
    })
    
    skillsMock.push({
      title: 'GitHub',
      image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    })
    skillsMock.push({
      title: 'Jenkins',
      image: 'https://www.jenkins.io/images/logos/pixelart/jenkins-pixelart-256.png'
    })
    
    skillsMock.push({
      title: 'Grafana',
      image: 'https://codigo200.files.wordpress.com/2017/11/grafana-logo-300x300.jpg'
    })
    skillsMock.push({
      title: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png'
    })
    skillsMock.push({
      title: 'React.js',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/500px-React-icon.svg.png'
    })
    skillsMock.push({
      title: 'Android',
      image: androidImg 
    })
    return (
        <section id={props.id} className="skills-section" >
         
         <h2 className="skill-title" >These are some tools and concepts I am comfortable with.</h2>
            
          
          
          <SkillWidget  marginWidth="10vw" skills={skillsMock} isVisible={props.isActive}/>
        </section>
    )
}
export default Skills;