import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from 'react-query';

const MyAppointment = () => {

    const { user } = useContext(AuthContext);

    const url = `https://final-project-server-xi.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    })
    // console.log(bookings);

    return (
        <div>
            <h1 className='text-3xl mb-5'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#E6E6E6]'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-100'>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking?.patient}</td>
                                <td>{booking?.treatment}</td>
                                <td>{booking?.appointmentDate}</td>
                                <td>{booking?.slot}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;