import React from 'react';
import './Portfolio.css'

const Portfolio = ({
    title,
    id,
    children
}) => {
    return (
        <section className="portfolio" id={id}>
            <h2 className="portfolio__title">{title}</h2>
            <div className="cards__container">
                {children}
            </div>            
        </section>
    )
}

export default Portfolio
