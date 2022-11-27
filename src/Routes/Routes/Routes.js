import React from 'react';
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home/Home";


const { createBrowserRouter } = require("react-router-dom");

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
    
]);

export default Routes;