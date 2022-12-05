import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../CustomHook/useAdmin";
import useBuyer from "../../CustomHook/useBuyer";
import useSeller from "../../CustomHook/useSeller";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isSeller] = useSeller(user?.email);
    
  return (
    <div className='lg:w-4/5 mx-auto'>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {
            isBuyer && <li><Link to='/dashboard/bookings'>My Orders</Link></li>
          }
            
          {
            isAdmin && 
            <>
            <li><Link to='/dashboard/allusers'>All Users</Link></li>
            <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
            <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
            </>
          }
          {
            isSeller && 
            <>
            <li><Link to='/dashboard/addphone'>Add Phone</Link></li>
            <li><Link to='/dashboard/sellerproducts'>My Products</Link></li>
            </>
          }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
