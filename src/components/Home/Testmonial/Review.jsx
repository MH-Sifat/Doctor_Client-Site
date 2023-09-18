import React from 'react';

const Review = ({ review }) => {
    const { name, description, address, img } = review;

    return (
        <div className="card  p-6 shadow-xl">

            <div className='m-2'>
                <p>{description}</p>
                <div className="flex items-center mt-8">
                    <div className='w-16 mr-5 rounded-full ring ring-secondary ring-offset-2 '>
                        <figure><img src={img} alt="Shoes" /></figure>
                    </div>
                    <div>
                        <h5 className='font-bold text-xl'>{name}</h5>
                        <p>{address}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;