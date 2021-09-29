import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <h2 className="footer__title">Contact me.</h2>
                <div className="footer__icons">
                    <a href="https://github.com/millerarocha" target="_blank" className="footer__link"><i className="fab fa-github"></i></a>
                    <a href="mailto:millerarocha@gmail.com" target="_blank" className="footer__link"><i className="fas fa-envelope"></i></a>
                    <a href="https://twitter.com/millerarocha" target="_blank" className="footer__link"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/learninmotion?sub_confirmation=1" target="_blank" className="footer__link"><i className="fab fa-youtube"></i></a>
                </div>
                <p className="footer__text">All rights reserved, developed by Miller Rocha using ReactJs.</p>
            </footer>
        </>
    )
}

export default Footer
