import React from 'react';

import './About.css';

import codingImage from '../../assets/images/coding.jpg'
import abilities from '../../DB/abilities.js';

const About = () => {
    return (
        <>           
            <section className="about">
                <div className="about__info">
                    <h2 className="about__title">About me</h2>
                    <p className="about__text">Mechatronic engineer MSc. I have experience in industrial automation and software development, now I'm interested in working as a Frontend developer, every day I'm improving my abilities in web technologies.</p>
                    <p className="about__text">Main knowledge in:</p>
                    <div className="about__icons">
                        {abilities.map((item)=>
                            <img key={item.id} src={item.photo.default} alt={item.value} className="about__icon"/>
                        )}
                    </div>
                </div>
                <img src={codingImage} alt="miller_coding" className="about__img"/>
            </section>   
        </>
    )
}

export default About
