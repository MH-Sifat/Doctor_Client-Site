import React from 'react';
import appoinmentbg from '../../../assets/images/appointment.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
const StayConnect = () => {
    return (
        <div style={{
            background: `url(${appoinmentbg})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'

        }}  className="hero mt-28 pt-8">
            <div className=" ">
                <p className='text-center text-secondary font-bold mt-8 mb-2'>Contact Us</p>
                <h2 className='text-center text-white text-4xl mt-2 mb-2'>Stay connected with us</h2>
                <div className='grid '>
                <input type="email" placeholder="Email Address" className=" input input-bordered w-full pe-56 my-3" />
                <input type="text" placeholder="Subject" className="input input-bordered w-full pe-56 my-3" />
                <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg w-full pl-4 pb-16 pe-56 my-3" ></textarea>               
                </div>
            <div className='m-4 mb-12 flex justify-center'><PrimaryButton>get started</PrimaryButton></div>   
            </div>

        </div>
    );
};

export default StayConnect;