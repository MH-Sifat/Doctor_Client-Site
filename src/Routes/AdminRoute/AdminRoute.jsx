import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    const [ isAdmin, isAdminLoading ] = useAdmin(user?.email)

    if (loading || isAdminLoading) {
        return <div className='h-96 flex items-center justify-center'><progress className="progress w-56" /></div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;