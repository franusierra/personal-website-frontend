import React from 'react';
import ReactDOM from 'react-dom';
import PsychicMe from '../psychic-me.js';
it("renders without crashing",()=>{
    const div=  document.createElement("div");
    ReactDOM.render(<PsychicMe/>,div)
})
