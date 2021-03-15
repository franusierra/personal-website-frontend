
import React from 'react';
import { ReactSVG } from 'react-svg'
import dinosaur from './dinosaur.svg'
import "./dinosaur-ride.scss"

const DinosaurRide=() => {
    return(
        <ReactSVG className="dinosaur-svg" src={dinosaur}
        />                      
    )
}
export default DinosaurRide