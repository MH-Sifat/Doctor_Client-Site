import React, { useState } from 'react';

const AddNewDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);

    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:3000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully')
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
                                <span className="label-text">Photo</span>
                            </label>
                            <input onChange={e => setImage(e.target.files[0])} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" className='mt-6  btn btn-accent  w-full mt-4' value='Add' />

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddNewDoctor;