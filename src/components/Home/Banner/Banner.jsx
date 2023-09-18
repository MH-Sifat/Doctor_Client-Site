import React from 'react';
import banner from '../../../assets/images/chair.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'

        }}  className="hero">
            <div className="sm:my-5 md:my-32 hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton><Link to='/appointment'>get started</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner; 