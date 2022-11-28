import { useLoaderData } from 'react-router-dom';
import PhoneCards from './PhoneCards';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                phones.map((phone, index) => <PhoneCards key={index} phone={phone}></PhoneCards>)
            }
        </div>
    );
};

export default Phones;