import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {

    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-xi.vercel.app/doctors')
            const data = await res.json();
            return data;
        }
    })

    const deleteDoctor = (doctor) => {
        fetch(`https://final-project-server-xi.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Doctor ${doctor.name} is deleted successfully`)
                    refetch()
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1 className='text-2xl mb-5'> Manage Doctors</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#E6E6E6]'>
                        <tr>
                            <th>#</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>specialty</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='bg-base-100'>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    {/* <div className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={doctor?.image} />
                                        </div>
                                    </div> */}

                                    <div className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={`data:image/png;base64,${doctor?.image}`} />
                                        </div>
                                    </div>

                                </td>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td>{doctor?.specialty}</td>
                                <td><button onClick={() => { deleteDoctor(doctor) }} className="btn btn-sm btn-active btn-error text-white">Delete</button> </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;