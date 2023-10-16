import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';


const CheckoutFrom = ({ booking }) => {

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const { price, patient, email, _id } = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://final-project-server-xi.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('https://final-project-server-xi.vercel.app/payments', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congratulation! Your payment is done')
                        setTransactionId(paymentIntent.id)
                    }
                });
        }

    }
    return (
        <>
            <form className='w-96' onSubmit={handleSubmit}>
                <CardElement
                    option={{
                        style: {
                            base: {
                                fontSize: '18px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm bg-gradient-to-l from-primary to-secondary text-white mt-2' type='submit' disabled={!stripe || !clientSecret}>Pay</button>
            </form>
            <p className='text-error'>{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p><b>{transactionId}</b></p>
                </div>
            }
        </>
    );
};

export default CheckoutFrom;