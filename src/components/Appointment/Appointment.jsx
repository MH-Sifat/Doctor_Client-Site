import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';



const Appointment = () => {
    const [selectedDate, setselectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setselectedDate={setselectedDate}
            ></AppointmentBanner>
            <AvailableAppointment
            selectedDate={selectedDate}
            ></AvailableAppointment>
        </div>
    );
};

export default Appointment;