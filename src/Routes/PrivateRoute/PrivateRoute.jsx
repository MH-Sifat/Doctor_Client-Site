import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <div className='h-96 flex items-center justify-center'><progress className="progress w-56" /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;