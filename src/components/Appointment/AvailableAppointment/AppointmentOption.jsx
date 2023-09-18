import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {

    const { _id, name, slots } = appointmentOption;

    return (
        <div className="card  p-6 text-center shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-zinc-400'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>

                <label
                    disabled={slots.length === 0}
                    htmlFor="booking-modal"
                    className="btn bg-gradient-to-r from-primary to-secondary text-white"
                    onClick={() => setTreatment(appointmentOption)}>Book Appointment

                </label>

            </div>
        </div>
    );
};

export default AppointmentOption;