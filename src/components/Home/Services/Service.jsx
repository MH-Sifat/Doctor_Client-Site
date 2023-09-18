import React from 'react';

const Service = ({ service }) => {
    const { name, description, icon } = service;


    return (
        <div className="card  p-6 text-center shadow-xl">
            <figure><img src={icon} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-center">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;