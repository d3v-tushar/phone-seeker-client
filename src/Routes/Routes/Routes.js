import React from 'react';
import DashboardLayout from '../../Layouts/Dashboard/DashboardLayout';
import Main from "../../Layouts/Main/Main";
import Blog from '../../Pages/Blog/Blog';
import AddPhone from '../../Pages/Dashboard/AddPhone/AddPhone';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from "../../Pages/Home/Home/Home";
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import Phones from '../../Pages/Phones/Phones';
import Register from '../../Pages/Register/Register';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const { createBrowserRouter } = require("react-router-dom");

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:brand',
                element: <PrivateRoute><Phones></Phones></PrivateRoute>,
                loader: ({params}) => fetch(`https://phone-seeker-server.vercel.app/phones/${params.brand}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addphone',
                element: <AddPhone></AddPhone>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
    
]);

export default Routes;