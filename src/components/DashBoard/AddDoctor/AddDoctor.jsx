import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const location = useLocation();
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';
    

    //In this we are hosting image in imagebb 
    const imageHostKey = import.meta.env.VITE_imagebb_key;


    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/appointmentSpecialty')
            const data = res.json();
            return data;
            // console.log(data);

        }
    })

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imageData?.data?.url
                    }
                    console.log(doctor.specialty);
                    console.log(doctor);
                    fetch('http://localhost:3000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is Added Successfully`);
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })

    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl mb-5'>Add a New Doctor</h2>

            <div className='h-[700px]'>
                <div className='bg-base-100 w-96 p-6 shadow-lg rounded'>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input placeholder='Enter your Name' {...register("name", { required: "required" })} type="text" className="input input-bordered" />
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" className="input input-bordered"
                                placeholder='Enter your email'
                                {...register("email", { required: "required" })} />
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <label className="label">
                                <span className="label-text">specialty</span>
                            </label>
                            <select {...register('specialty')} className="select select-bordered w-full">
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
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                                {...register("image", { required: "Photo is required" })} />
                            {errors.img && <p className='text-red-500'>{errors.img?.message}</p>}
                        </div>
                        <input type="submit" className='mt-6  btn btn-accent  w-full mt-4' value='Add' />

                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddDoctor;