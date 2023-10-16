import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const Payment = () => {
    const booking = useLoaderData();
    const { email, patient, price, slot, appointmentDate, treatment, phone } = booking;
    return (
        <div>
            <h2 className='text-2xl'>Payment for <span className='text-secondary'>{treatment}</span></h2>
            <p className='mb-8'>please pay <b>{price}</b> for your Appointment on <strong>{appointmentDate}</strong> at <b>{slot}</b></p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom
                        booking={booking}
                    ></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;