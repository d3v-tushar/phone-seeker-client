import React from 'react';
import { MdVerified } from "react-icons/md";

const PhoneCards = ({phone}) => {
    const {name, image, location, sellerName, resellPrice, originalPrice, UsageDuration, postedTime} = phone;
    return (
        <div className="rounded-md shadow-md bg-gray-900 text-gray-100">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src="https://source.unsplash.com/50x50/?portrait" alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leading-none mt-4 text-md col-span-2 flex items-center">{sellerName}<span className="text-blue-600 ml-2"> <MdVerified/> </span></h2>
				<span className="inline-block text-xs leading-none text-gray-400">{location}</span>
			</div>
		</div>
		{/* <button title="Open options" type="button">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
				<path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
				<path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
			</svg>
		</button> */}
	</div>
	<img src={image} alt="" className="object-cover object-center w-full h-72 my-4 bg-gray-500" />
	<div className="p-3">
		<div className="py-1">
			<div className="grid items-center">
				<h3 className='text-xl'>{name}</h3>
                <p className='text-md semi-bold'>Resell Price: ${resellPrice}</p>
                <p className='text-md semi-bold'>Original Price: ${originalPrice}</p>
                <p className='text-md semi-bold'>Usage Duration: {UsageDuration} Months</p>
                <p className='text-md semi-bold'>Posted On: {postedTime}</p>
				
			</div>
		</div>
		{/* <div className="space-y-3">
			<p className="text-sm">
				<span className="text-base font-semibold">leroy_jenkins72</span>Nemo ea quasi debitis impedit!
			</p>
			<input type="text" placeholder="Add a comment..." className="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-gray-100" />
		</div> */}
	</div>
</div>
    );
};

export default PhoneCards;