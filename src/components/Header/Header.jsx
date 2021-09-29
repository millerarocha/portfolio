import React from 'react';

import './Header.css';
import millerPhoto from '../../assets/images/photo.png'

const Header = () => {
    return (
        <>
            <header className="header" id="#header">
                <div className="greeting slide-in-left">
                    <h2 className="greeting__name">MILLER ROCHA.</h2>
                    <h1 className="greeting__title">I'm a Frontend Developer</h1>
                    <p className="greeting__info">Mechatronic engineer MSc., interested in working as a Frontend developer. I have abilities in html, css and javascript, knowledge in Bootstrap, ReactJs and AngularJs. Languages Spanish and English.</p>
                    <a href="#portfolio" className="greeting__button">Go to portfolio <i className="fas fa-chevron-right greeting__button-icon"></i></a>
                </div>
                <div className="photo">
                    <div className="circle"></div>
                    <div className="circle circle--gradient  vibrate-1"></div>
                    <img src={millerPhoto} alt="miller photo" className="photo__img"/>
                </div>
            </header>
        </>
    )
}

export default Header
