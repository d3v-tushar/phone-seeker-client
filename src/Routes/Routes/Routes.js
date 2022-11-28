import React from 'react';
import Main from "../../Layouts/Main/Main";
import Blog from '../../Pages/Blog/Blog';
import Home from "../../Pages/Home/Home/Home";
import Phones from '../../Pages/Phones/Phones';


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
                element: <Phones></Phones>,
                loader: ({params}) => fetch(`http://localhost:5000/phones/${params.brand}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
    
]);

export default Routes;