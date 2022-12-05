import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const [allBuyer, setAllBuyer] = useState([]);
    useEffect(() =>{
        fetch('https://phone-seeker-server.vercel.app/users?role=Buyer')
        .then(res => res.json())
        .then(data => setAllBuyer(data));
    }, []);
    return (
        <div>
            <h2 className='text-3xl text-center my-4'>All Buyers: {allBuyer.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {
                    allBuyer.map((buyer, index) =>
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{buyer.name}</td>
                        <td>{buyer.email}</td>
                        <td>{buyer.role}</td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllBuyers;