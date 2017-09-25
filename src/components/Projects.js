import React, { Component } from 'react';
import '../styles/projects.css';


class Projects extends Component {
    render(){
        return(
            <div>
                <h2 className='projectsHeading'>
                    Projects
                </h2>
                <p>
                    <a href='https://codepen.io/LeomarAmiel/full/EgrkPX' className='projectAnchor' target='_self' rel='external noopener noreferrer'>Tribute Page</a>: 
                    Made tribute page for Alan Turing, the father of Computer Science.
                    This was my first project and is included in the FreeCodeCamp map.
                    Hides side of page where there is an image when height is greater than it's width.
                </p>
                <p>
                    <a href='https://codepen.io/LeomarAmiel/full/ZBOMPX/' className='projectAnchor' target='_self' rel='external noopener noreferrer'>Random Quote Machine</a>: 
                    Quote generator using Quotes on Design API. This also allows you to tweet the quote. 
                    Took an 8-bit approach to the design but is not responsive at all.
                </p>
                <p>
                    <a href='https://codepen.io/LeomarAmiel/full/XawoYo/' className='projectAnchor' target='_self' rel='external noopener noreferrer'>Javascript Calculator</a>: 
                    Calculator that imitates (or at least tries) the function of the calculator on an IOS device. Handles up to exponents, too.
                    Instead of a function doing one thing, I stuffed everything in two event listeners (Crappy, right?).  
                </p>
            </div>
        )
    }
}

export default Projects;