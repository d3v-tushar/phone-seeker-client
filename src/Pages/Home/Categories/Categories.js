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
        // <div>
        //     <h2 className='text-3xl bold text-center'>Categories Section</h2>
        //     <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        //     {
        //         categories.map((category, index) => <Category key={index} category={category}></Category>)
        //     }
        //     </div>
        // </div>

        <div className="bg-white">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="/" className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://i.ibb.co/9brtNBW/nokia.png" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Electronics
                </div>
              </div>
            </a>
            <a href="/" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img alt='' src="https://i.ibb.co/6mHKG3P/apple.png" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Computers
                </div>
              </div>
            </a>
            <a href="/" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img alt='' src="https://i.ibb.co/X70NL8n/rm2.png" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Clothes
                </div>
              </div>
            </a>
            <a href="/" className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img alt='' src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Smart Home
                </div>
              </div>
            </a>
            <a href="/" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img alt='' src="https://cdn.tailkit.com/media/placeholders/photo-164_6wVEHfI-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Shoes
                </div>
              </div>
            </a>
            <a href="/" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img alt='' src="https://cdn.tailkit.com/media/placeholders/photo-wW7XbWYoqK8-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Wearables
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Categories;