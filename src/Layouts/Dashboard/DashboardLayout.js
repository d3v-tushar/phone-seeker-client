import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../CustomHook/useAdmin";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
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
           
            <li>
              <Link to='/dashboard'>My Bookings</Link>
            </li>
            <li>
            {
              isAdmin && <Link to='/dashboard/allusers'>All Users</Link>
            }
            </li>
            <li>
              <Link to='/dashboard/addphone'>Add Phone</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
