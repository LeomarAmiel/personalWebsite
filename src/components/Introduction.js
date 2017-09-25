import React, { Component } from 'react';
import '../styles/introduction.css';

class Introduction extends Component { 
    render(){
        return(
            <div>
                <div className='imgAmielContainer'>
                    <img className='imgAmiel' src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.0-0/p526x296/21558674_10212403190708719_2342445327448558578_n.jpg?oh=1281b0fb08a77b1656b18e5383d5f0ff&oe=5A5A8FB6" alt="Emotional me looking at life"/> 
                </div>
                <div>
                    <h2 className='introHeading'>
                        I'm Leomar!
                    </h2>
                    <p>
                        Welcome to my page! I'm a <strong>React</strong> and <strong>Javascript</strong> Developer. 
                    </p>
                    <p>
                        I have no experience in any production-level work, yet. 
                        Love creating web applications and learn more on new technologies that further hone my skills.
                    </p>
                    <p>
                        A Computer Science graduate from <strong>University of Santo Tomas</strong>. 
                        Based in the <strong>Manila, Philippines</strong>.
                    </p>
                </div>
            </div>
        );
    }
}

export default Introduction;