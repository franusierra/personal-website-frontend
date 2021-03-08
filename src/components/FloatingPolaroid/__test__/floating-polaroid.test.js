import React from 'react';
import ReactDOM from 'react-dom';
import FloatingPolaroid from '../floating-polaroid.js';
import face from '../../../res/face.jpeg'
it("renders without crashing",()=>{
    const div=  document.createElement("div");
    ReactDOM.render(<FloatingPolaroid name="Hello world" face={face}/>,div)
})
