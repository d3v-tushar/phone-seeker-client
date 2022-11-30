import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { useTitle } from "../../CustomHook/useTitle";

const BookingModal = ({booking}) => {
    useTitle('Booking - ')
    const {user} = useContext(AuthContext);
    const {name, resellPrice} = booking;
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.buyerName.value;
        const email = form.buyerEmail.value;
        const item = form.itemName.value;
        const price = form.price.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const bookingDetails = {name, email, item, price, location, phone};
        console.log(bookingDetails);
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
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
          <input name="buyerName"  type="text" value={`Name: ${user.displayName}`} readOnly className="input input-bordered input-accent w-full" />
          <input name="buyerEmail" type="text" value={`Email: ${user.email}`} readOnly className="input input-bordered input-accent w-full" />
          <input name="itemName" type="text" value={`Selected Phone: ${name}`} readOnly className="input input-bordered input-accent w-full" />
          <input name="price" type="text" value={`Price: ${resellPrice}`} readOnly className="input input-bordered input-accent w-full" />
          <input name="location" type="text" placeholder="Meeting Location" className="input input-bordered input-accent w-full" />
          <input name="phone" type="tel" placeholder="Contact Number" className="input input-bordered input-accent w-full" />
          <br />
          <input type="submit" className="btn w-full mx-auto max-w-xs" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
