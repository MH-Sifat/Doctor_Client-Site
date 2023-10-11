import React from 'react';

const Doctor = ({doctor}) => {
    const { name, email, image,specialty } = doctor;


    return (
        <div className="card  p-6 text-center shadow-xl">
            <figure><img className='h-96' src={`data:image/png;base64,${image}`} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-3xl font-semibold text-center">Doctor: {name}</h2>
                <p className='text-secondary bold'>specialty: {specialty}</p>
                <p>contact: {email}</p>
            </div>
        </div>
    );
};

export default Doctor;