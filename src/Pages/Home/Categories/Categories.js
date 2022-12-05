import { useQuery } from '@tanstack/react-query';
//import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    // const [categories, setCategories] = useState([]);

    const {data:categories = []} = useQuery({
        queryKey: ['https://phone-seeker-server.vercel.app//categories'],
        queryFn: () => fetch(`categories.json`)
        .then(res => res.json())
    });
    return (
        <div>
            <h2 className='text-3xl bold text-center'>Categories Section</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                categories.map((category, index) => <Category key={index} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;