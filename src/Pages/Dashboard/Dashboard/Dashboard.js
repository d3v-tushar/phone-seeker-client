import React from 'react';
import { useTitle } from '../../../CustomHook/useTitle';
import MyOrders from '../MyOrders/MyOrders';

const Dashboard = () => {
    useTitle('Dashboard - ')
    return (
        <div>
            <MyOrders></MyOrders>
        </div>
    );
};

export default Dashboard;