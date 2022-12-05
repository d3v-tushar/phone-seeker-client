import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const SellerProduct = () => {
    const {user} = useContext(AuthContext);
  const [sellerProducts, setSellerProducts] = useState([]);
  useEffect(() => {
    fetch(`https://phone-seeker-server.vercel.app/phones?sellerName=${user.displayName}`)
      .then((res) => res.json())
      .then((data) => setSellerProducts(data));
  }, [user]);
  return (
    <div>
      <h2 className="text-3xl text-center my-8">My Products</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              {sellerProducts.map((products, index) => (
                <th key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-32">
                          <img
                            src={
                              products.image
                                ? products.image
                                : "/tailwind-css-component-profile-2@56w.png"
                            }
                            alt="PhoneImage"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{products.name}</td>
                  <td>${products.resellPrice}</td>
                  <th>
                    <td>{products.condition? products.condition : "No Data"}</td>
                  </th>
                </th>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerProduct;
