import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testmonial from './Testmonial/Testmonial';
import StayConnect from './StayConnect/StayConnect';
import Doctors from './Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <Doctors></Doctors>
            <MakeAppointment></MakeAppointment>
            <Testmonial></Testmonial>
            <StayConnect></StayConnect>
            
        </div>
    );
};

export default Home;