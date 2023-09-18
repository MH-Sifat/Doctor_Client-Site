import React, { useState } from 'react';
import banner from './../../assets/images/chair.png';
import bg from './../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate,setselectedDate}) => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }} className="hero">
            <div className="justify-around my-32 hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='bg-base-100 rounded'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setselectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;