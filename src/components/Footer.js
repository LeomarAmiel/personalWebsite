import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className='footerContainer'>
                <div className='socialMediaContainer'>
                    <a href='https://github.com/LeomarAmiel' className='footerAnchor'>Github</a>
                </div>
                <p className='copyright'>© Copyright 2017 Leomar Alejar</p>
            </footer>
        )
    }
}

export default Footer;