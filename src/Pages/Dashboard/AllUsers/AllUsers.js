import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://phone-seeker-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    console.log(users);

    const handleMakeAdmin = id =>{
        fetch(`https://phone-seeker-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make Admin Successful');
                refetch();
            }
        })
    };

    return (
        <div>
            <h2 className='text-3xl text-center'>All Users</h2>

            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>
        <tr key={index}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Verified</button>}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;