//import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../CustomHook/useTitle';
import BookingModal from './BookingModal';
import PhoneCards from './PhoneCards';

const Phones = () => {
    useTitle('Devices - ')
    const phones = useLoaderData();
    const [booking, setBooking] = useState(null);

    // const {data, isLoading} = useQuery({
    //     queryKey: ['phones'],
    //     queryFn: () => fetch(`http://localhost:5000/phones/${params.brand}`)
    //     .then(res => res.json())
    // });
    return (
        <section>
            <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                phones.map((phone, index) => <PhoneCards key={index} phone={phone} setBooking={setBooking}></PhoneCards>)
            }
        </div>
        {
            booking &&
            <BookingModal 
            booking={booking}
            setBooking={setBooking}
            ></BookingModal>
        }
        </section>
    );
};

export default Phones;