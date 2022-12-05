import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://phone-seeker-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    // const handleMakeAdmin = id =>{
    //     fetch(`https://phone-seeker-server.vercel.app/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         if(data.modifiedCount > 0){
    //             toast.success('Verification Successfull');
    //             refetch();
    //         }
    //     })
    // };

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
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index) =>
        <tr key={index}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user?.role}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;