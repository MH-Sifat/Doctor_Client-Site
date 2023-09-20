import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
// import toast from 'react-hot-toast';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [logInError, setLogInError] = useState("");

    const { signIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogIn = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast.success('LogIn Successfull')
                // from.reset()
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
                setLogInError(error.message)
                // from.reset()
            })
    }

    return (
        <div className='flex justify-center items-center h-[700px]'>
            <div className='w-96 p-6 shadow-lg rounded'>
                <h4 className='text-center font-bold text-3xl'>LogIn</h4>
                <form onSubmit={handleSubmit(handleLogIn)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered"
                            {...register("email", { required: "required" })} />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered" {...register("password", {
                            required: "required",
                            minLength: { value: 6, message: "Password must be 6 charecters long" }
                        })} />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input type="submit" className='btn btn-accent  w-full mt-4' value='Sign Up' />
                    {logInError && <p className='text-red-500'>{logInError}</p>}
                    {logInError && <p className='text-red-500'>{logInError}</p>}

                </form>
                <p className='mt-1'><small>New to Doctors Portal? <Link to='/signup' className='text-secondary font-bold'>Create an Account</Link></small></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;