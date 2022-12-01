import React from 'react';
import DashboardLayout from '../../Layouts/Dashboard/DashboardLayout';
import Main from "../../Layouts/Main/Main";
import Blog from '../../Pages/Blog/Blog';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Home from "../../Pages/Home/Home/Home";
import Login from '../../Pages/Login/Login';
import Phones from '../../Pages/Phones/Phones';
import Register from '../../Pages/Register/Register';
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
                loader: ({params}) => fetch(`http://localhost:5000/phones/${params.brand}`)
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
            }
        ]
    }
    
]);

export default Routes;