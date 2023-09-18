import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';


const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',


        }} className="hero my-12 mt-36">
            <div className="my-24 p-0 mb-0 hero-content flex-col lg:flex-row">
                <img src={doctor} className="hidden lg:block lg:-mt-52 lg:w-1/2 rounded-lg" />
                <div className='text-white m-6'>
                    <p className='m-5 text-primary font-bold'>Appointment</p>
                    <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton><Link to='/appointment'>get started</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;