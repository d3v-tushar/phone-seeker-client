import React, { useEffect, useState } from 'react';
import { MdVerified } from "react-icons/md";

const PhoneCards = ({phone, setBooking}) => {
    const {name, image, location, sellerName, resellPrice, originalPrice, UsageDuration, postedTime, sellerEmail, sellerPhoto} = phone;
	const [status, setStatus] = useState(false);
	useEffect(() =>{
		fetch(`https://phone-seeker-server.vercel.app/users/verify?email=${sellerEmail}`)
		.then(res => res.json())
		.then(data => {
			setStatus(data[0].verified);
		})
	}, [sellerEmail]);



    return (
        <div className="rounded-md shadow-md bg-gray-900 text-gray-100 bordered">
	<div className="flex items-center justify-between p-3">
		<div className="flex items-center space-x-2">
			<img src={ sellerPhoto ? sellerPhoto : "https://source.unsplash.com/50x50/?portrait"} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
			<div className="-space-y-1">
				<h2 className="text-sm font-semibold leading-none mt-4 text-md col-span-2 flex items-center">{sellerName}{status && <span className="text-blue-600 ml-2"> <MdVerified/> </span>}</h2>
				<span className="inline-block text-xs leading-none text-gray-400">{location}</span>
			</div>
		</div>
	</div>
	<img src={image} alt="" className="object-cover object-center w-full h-72 my-4 bg-gray-500" />
	<div className="p-3">
		<div className="py-1">
			<div className="grid items-center">
				<h3 className='text-xl'>{name}</h3>
                <p className='text-md semi-bold'>Resell Price: ${resellPrice}</p>
                <p className='text-md semi-bold'>Original Price: ${originalPrice}</p>
                <p className='text-md semi-bold'>Usage Duration: {UsageDuration ? UsageDuration : "Recently Brought"} Months</p>
                <p className='text-md semi-bold'>Posted On: {postedTime}</p>
				<label onClick={() => setBooking(phone)} htmlFor="my-modal-3" className="btn btn-primary my-4">Book This Phone</label>
			</div>
		</div>
	</div>
</div>
    );
};

export default PhoneCards;