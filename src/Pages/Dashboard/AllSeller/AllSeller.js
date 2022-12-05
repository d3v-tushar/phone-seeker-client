import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { MdVerified } from "react-icons/md";
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const AllSellers = () => {
    const {data: allSeller = [], isLoading, refetch} = useQuery({
        queryKey: ['seller'],
        queryFn: async() =>{
            const res = await fetch('https://phone-seeker-server.vercel.app/users?role=Seller');
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = id =>{
        fetch(`https://phone-seeker-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Verification Successfull');
                refetch();
            }
        })

        if(isLoading){
            return (<LoadingSpinner></LoadingSpinner>)
          };

    };
    return (
        <div>
            <h2 className='text-3xl text-center my-4'>All Seller: {allSeller.length}</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    allSeller.map((seller, index) =>
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{seller.name}</td>
                        <td>{seller.email}</td>
                        <td>{seller?.verified ? <span className="text-blue-600 ml-2"><MdVerified/></span> : <button onClick={() => handleVerify(seller._id)} className='btn btn-xs btn-primary'>Verify</button>}</td>
                    </tr>)
                }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllSellers;