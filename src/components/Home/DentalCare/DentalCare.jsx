import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import treatment from '../../../assets/images/treatment.png';
import { Link } from 'react-router-dom';

const DentalCare = () => {
    return (
        <div className="hero">
            <div className="my-24 hero-content ps-12 flex-col lg:flex-row-reverse">
                <div className='sm:px-0 lg:px-14'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryButton><Link to='/appointment'>get started</Link></PrimaryButton>
                </div>
                <img src={treatment} className="lg:w-2/5 rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default DentalCare;