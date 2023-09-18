import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ setTreatment, treatment, selectedDate }) => {
    const { name, slots } = treatment;

    const date = format(selectedDate, "PP");

    const handleBooking = (event) => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking = {
            appointmentDate: date,
            slot,
            treatment: name,
            patient,
            email,
            phone
        }
        console.log(booking);
        // In Future : Send Data in Server and After save data close the modal and seen display success toast / alert 
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className='flex justify-between'>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <label htmlFor="booking-modal" className="btn btn-outline btn-circle btn-sm btn-error">X</label>
                    </div>
                    <form onSubmit={handleBooking} className="mt-5">
                        <input type="text" disabled value={date} className="input input-bordered w-full" />

                        <select name='slot' className="select select-bordered w-full  mt-4">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full mt-4" />
                        <input name='email' type="text" placeholder="Your Email" className="input input-bordered w-full mt-4" />
                        <input name='phone' type="number" placeholder="Your Phone Number" className="input input-bordered w-full mt-4" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full mt-5' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;