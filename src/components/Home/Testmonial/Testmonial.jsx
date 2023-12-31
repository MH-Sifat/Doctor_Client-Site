import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testmonial = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'California',
            img:people1

        },
        {
            id: 2,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'California',
            img:people2

        },
        {
            id: 3,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            address:'California',
            img:people3

        }
    ]

    return (
        <div id='review' className="my-16 mx-8">
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary font-bold text-xl'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid mt-8 gap-6 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Testmonial;