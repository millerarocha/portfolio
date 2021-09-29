import React from 'react';
import './Card.css';

const Card = ({item}) => {
    return (
        <div key={item.id} className="card">
            <img src={item.image.default} alt={item.title} className="card__img"/>
            <div className="card__info">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__description">{item.description}</p>
                <div className="card__icons">
                    {
                    item.github?   
                        <a href={item.github} target="_blank" className="card__link"><i className="fab fa-github"></i></a>
                        : <></>
                    }
                    {
                    item.demo?   
                        <a href={item.demo} target="_blank" className="card__link"><i className="fas fa-laptop-code"></i></a>
                        : <></>
                    }
                    {
                    item.youtube?   
                        <a href={item.youtube} target="_blank" className="card__link"><i className="fab fa-youtube"></i></a>
                        : <></>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Card
