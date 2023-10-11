import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const AddNewDoctor = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [image, setImage] = useState(null);

    const [success, setSuccess] = useState(false);


    const { data: specialties } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-xi.vercel.app/appointmentSpecialty')
            const data = res.json();
            return data;
            // console.log(data);

        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        formData.append('specialty', specialty);

        fetch('https://final-project-server-xi.vercel.app/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully');
                    navigate('/dashboard/manageDoctors')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h2 className='text-2xl mb-5'>Add a New Doctor</h2>

            <div className='h-[700px]'>
                <div className='bg-base-100 w-96 p-6 shadow-lg rounded'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={e => setName(e.target.value)} placeholder='Enter your Name' type="text" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={e => setEmail(e.target.value)} type="email" className="input input-bordered"
                                placeholder='Enter your email' />
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">specialty</span>
                            </label>
                            <select onChange={e => setSpecialty(e.target.value)} className="select select-bordered w-full">
                                {
                                    specialties?.map(specialty => <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}</option>)
                                }
                            </select>

                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input onChange={e => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" className='mt-6  btn btn-accent  w-full mt-4' value='Add' />
                        {
                            success && <p className='text-green-500'>{success}</p>
                        }
                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddNewDoctor;