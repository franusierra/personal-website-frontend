
import React from 'react';
import { ReactSVG } from 'react-svg'
import workingsvg from './working-me.svg'
import "./working-me.scss"

const WorkingMe=() => {
    return(
        <ReactSVG className="working-svg" src={workingsvg} />                      
    )
}
export default WorkingMe