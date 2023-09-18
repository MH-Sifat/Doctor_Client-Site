import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='flex justify-center items-center h-[700px]'>
            <div className='w-96 p-6 shadow-lg rounded'>
                <h4 className='text-center font-bold text-3xl'>Sign Up</h4>
                <form action="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <input type="submit" className='btn btn-accent  w-full mt-4' value='Sign Up' />
                </form>
                <p className='mt-1'><small>Already have an account? <Link to='/login' className='text-secondary font-bold'>Please Login</Link></small></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div> 

        </div>
    );
};

export default SignUp;