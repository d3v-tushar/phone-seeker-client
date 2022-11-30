import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import PhoneCards from './PhoneCards';

const Phones = () => {
    const phones = useLoaderData();
    const [booking, setBooking] = useState({});
    return (
        <section>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                phones.map((phone, index) => <PhoneCards key={index} phone={phone} setBooking={setBooking}></PhoneCards>)
            }
        </div>
        <BookingModal booking={booking}></BookingModal>
        </section>
    );
};

export default Phones;