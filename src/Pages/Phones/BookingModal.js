import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import { useTitle } from "../../CustomHook/useTitle";

const BookingModal = ({booking, setBooking}) => {
    useTitle('Booking - ')
    const {user} = useContext(AuthContext);
    const {name, resellPrice, image} = booking;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.buyerName.value;
        const email = form.buyerEmail.value;
        const item = form.itemName.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const bookingData = {image, name, email, item, price, location, phone};
        console.log(bookingData);
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setBooking(null);
                toast.success('Booking Confirmed');
            }
        })
    }
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            {name}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input name="buyerName"  type="text" value={`${user.displayName}`} disabled className="input input-bordered input-accent w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Your Email</span>
            </label>
            <input name="buyerEmail" type="text" value={`${user.email}`} disabled className="input input-bordered input-accent w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Selected Phone</span>
            </label>
            <input name="itemName" type="text" value={`${name}`} disabled className="input input-bordered input-accent w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Phone Price</span>
            </label>
            <input name="price" type="text" value={`${resellPrice}`} disabled className="input input-bordered input-accent w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Meeting Location</span>
            </label>
            <input name="location" type="text" placeholder="Dhaka, Bangladesh" className="input input-bordered input-accent w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label">
                <span className="label-text">Contact Number</span>
            </label>
            <input name="phone" type="tel" placeholder="+880 15000000" className="input input-bordered input-accent w-full" />
          </div>

          {/* <input name="buyerEmail" type="text" value={`${user.email}`} disabled className="input input-bordered input-accent w-full" />
          <input name="itemName" type="text" value={`${name}`} disabled className="input input-bordered input-accent w-full" />
          <input name="price" type="text" value={`${resellPrice}`} disabled className="input input-bordered input-accent w-full" />
          <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered input-accent w-full" />
          <input name="phone" type="tel" placeholder="Contact Number" className="input input-bordered input-accent w-full" /> */}
          <br />
          <input type="submit" className="btn w-full mx-auto max-w-xs" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
