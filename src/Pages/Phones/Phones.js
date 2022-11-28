import { useLoaderData } from 'react-router-dom';
import PhoneCards from './PhoneCards';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div className='my-6'>
            {
                phones.map((phone, index) => <PhoneCards key={index} phone={phone}></PhoneCards>)
            }
        </div>
    );
};

export default Phones;