import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ setTreatment, treatment, selectedDate, refetch }) => {
    const { name, slots,price } = treatment;
    const { user } = useContext(AuthContext);
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
            phone,
            price
        }
        console.log(booking);
        // In Future : Send Data in Server and After save data close the modal and seen display success toast / alert 
        fetch('https://final-project-server-xi.vercel.app/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

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

                        <input defaultValue={user?.displayName} name='name' type="text" placeholder="Your name" className="input input-bordered w-full mt-4" />
                        <input defaultValue={user?.email} name='email' type="text" placeholder="Your Email" className="input input-bordered w-full mt-4" />
                        <input name='phone' type="number" placeholder="Your Phone Number" className="input input-bordered w-full mt-4" />
                        <input type="submit" value="Submit" className='btn btn-accent w-full mt-5' />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;