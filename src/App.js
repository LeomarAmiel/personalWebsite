import React, { Component } from 'react';
import Header from './components/Header.js';
import Introduction from './components/Introduction.js';
import Projects from './components/Projects.js';
import Skillset from './components/Skillset.js';
import Footer from './components/Footer.js';
import './styles/app.css';

class App extends Component { 
    render(){
        return(
            <div>
                <Header/>
                <section className='paddingAdder'>
                    <Introduction/>
                    <Projects/>
                    <Skillset/>
                </section>
                    <Footer/>
            </div>
        );
    }
}


export default App;