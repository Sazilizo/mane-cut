import React from 'react';

const BarberCard = ({ barber }) => {
    return (
        <div className="barber-card">
            <img src={barber.image} alt={barber.name} />
            <h2>{barber.name}</h2>
            <p>{barber.description}</p>
        </div>
    );
}

export default BarberCard;