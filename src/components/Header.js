import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component { 
    render(){
        return(
            <header className='headerContainer'>
                <span className='headerHeading'>LeomarAmiel</span>
                {/*<div className='burgerBtnContainer'>
                    <button name='realBurgerBtn' className='realBurgerBtn'><div className='burgerBtnProxy'></div></button>
                </div>*/}
            </header>
        )
    }
}

export default Header;