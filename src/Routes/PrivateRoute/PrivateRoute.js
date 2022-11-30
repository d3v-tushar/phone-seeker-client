import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import LoadingSpinner from '../../Pages/Shared/LoadingSpinner/LoadingSpinner';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return (
        <LoadingSpinner></LoadingSpinner>
        )
    }
    if(user && user.uid){
       return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>;
};

export default PrivateRoute;