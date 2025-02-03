import React from 'react';
import './Card.css';

const Card = ({title, description, image, link}) => {
    return (
        <a href={link} className='card'>
            <img src={image} className='card-image'/>
            <h2>{title}</h2>
            <p>{description}</p>
        </a>
    )

}

export default Card;