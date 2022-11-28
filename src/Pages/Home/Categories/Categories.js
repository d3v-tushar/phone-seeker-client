import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);
    console.log(categories);
    return (
        <div>
            <h2 className='text-3xl bold text-center'>Categories Section</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;