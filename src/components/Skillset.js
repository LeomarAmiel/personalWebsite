import React, { Component } from 'react';
import '../styles/skillset.css';

class Skillset extends Component { 
    render(){
        return(
            <div>
                <h2 className='skilsetHeading'>
                    Skill Set
                </h2>
                <p>Languages and Frameworks that I have used, and some that I am in the progress of learning</p>
                <ul>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        ReactJS
                    </li>
                    <li>
                        Webpack
                    </li>
                    {/*<li>
                         NodeJS (in development)
                    </li>
                    <li>
                         Redux (in development)
                    </li>
                    <li>
                        Git
                    </li>*/}
                </ul>
            </div>
        )
    }
}

export default Skillset