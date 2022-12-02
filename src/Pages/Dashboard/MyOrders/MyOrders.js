import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl text-center font-bold my-4">My Orders</h3>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-24">
                        <img
                          src={
                            booking.image
                              ? booking.image
                              : "/tailwind-css-component-profile-2@56w.png"
                          }
                          alt="PhoneImage"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{booking.item}</td>
                <td>${booking.price}</td>
                <th>
                  <button className="btn btn-sm btn-xs">Pay Now</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
