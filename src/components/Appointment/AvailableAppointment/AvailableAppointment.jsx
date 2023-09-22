import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import { data } from 'autoprefixer';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {

    // const [appointmentOption, setAppointmentOption] = useState([]);

    const [treatment, setTreatment] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:3000/appointmentoptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    // }, [])


    const { data: appointmentOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentoptions', data],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/appointmentoptions');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='text-center my-16 mb-36'>
                <h3 className='text-secondary text-xl'>Available Services on  {format(selectedDate, "PP")}</h3>
                <p className='text-xl text-zinc-500 py-2'>Please select a service.</p>

                <div className='grid mt-8 gap-6 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        appointmentOption.map(option => <AppointmentOption
                            key={option._id}
                            appointmentOption={option}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }

                </div>
            </div>

            {
                treatment && <BookingModal

                    treatment={treatment}
                    setTreatment={setTreatment}
                    selectedDate={selectedDate}
                ></BookingModal>
            }

        </>
    );
};

export default AvailableAppointment;