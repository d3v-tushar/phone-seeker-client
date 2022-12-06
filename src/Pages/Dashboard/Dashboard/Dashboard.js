import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../CustomHook/useTitle';
//import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    useTitle('Dashboard - ');
    const {user} = useContext(AuthContext);
    return (
        <div className='grid justify-center text-center align-middle font-semibold text-gray-500 my-8'>
            <h2 className='text-2xl'>Welcome {user.displayName} To Phone Seeker</h2>
            <h1 className='text-6xl'>Dashboard</h1>
        </div>
    );
};

export default Dashboard;