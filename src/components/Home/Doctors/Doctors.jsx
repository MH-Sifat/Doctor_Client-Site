import React from 'react';
import Doctor from './Doctor';
import { useQuery } from 'react-query';


const Doctors = () => {

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-xi.vercel.app/doctors')
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='my-16 mb-72'>
            <div className='text-center'>
                <h4 className='text-primary'>OUR DOCTORS</h4>
                <h3 className='text-2xl text-accent'>Best Doctors In Our City</h3>
            </div>
            <div className='grid mt-8 gap-6 mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </div>
        </div>
    );
};

export default Doctors;