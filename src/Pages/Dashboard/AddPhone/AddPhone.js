import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const AddPhone = () => {
const {user} = useContext(AuthContext);

    const handleAddPhone = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.productName.value;
        const originalPrice = form.purchasePrice.value;
        const condition = form.condition.value;
        const mobileNumber = form.mobileNumber.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const resellPrice = form.productPrice.value;
        const yearofpurchase = form.yearofpurchase.value;
        const postedTime = new Date().toLocaleString();
        const image = form.image.value;
        const sellerName = user.displayName;
        const sellerEmail = user.email;
        const sellerPhoto = user.photoURL;

        console.log(name, originalPrice, condition, mobileNumber, location, category, description, resellPrice, yearofpurchase, postedTime, image);

        const phone = {name, originalPrice, condition, mobileNumber, location, category, description, resellPrice, yearofpurchase, postedTime, image, sellerName, sellerEmail, sellerPhoto};

        fetch('https://phone-seeker-server.vercel.app/phones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(phone)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success('Phone Added Successfully');
                form.reset();
            }
        })
    };

  return (
    <div className="grid justify-center gap-6 mx-auto">
      <h2 className="text-3xl text-center my-4">Add Phone</h2>
      <form onSubmit={handleAddPhone} className="grid grid-cols-2 gap-8">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            name="productName"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Purchase Price</span>
          </label>
          <input
            type="text"
            name="purchasePrice"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Condition</span>
          </label>
          <select name="condition" className="select select-bordered w-full max-w-xs">
        <option selected>Excelent</option>
        <option>Good</option>
        <option>Fair</option>
        </select>
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <select name="category" className="select select-bordered w-full max-w-xs">
            <option selected>apple</option>
            <option>samsung</option>
            <option>oneplus</option>
        </select>
        </div>

        
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Discription</span>
          </label>
          <textarea name="description" className="textarea textarea-bordered" placeholder="Product Discription"></textarea>
        </div>


        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="text"
            name="productPrice"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Year of Purchase</span>
          </label>
          <input
            type="text"
            name="yearofpurchase"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Photo URL</span>
        </label>
        <input
            type="text"
            name="image"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary" type="submit">Add Phone</button>
      </form>
    </div>
  );
};

export default AddPhone;
