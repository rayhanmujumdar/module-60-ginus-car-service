import { useNavigate, useParams } from 'react-router-dom';
import useDetails from '../../../../Hooks/useDetails';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [details] = useDetails(serviceId)
    const navigate = useNavigate()
    
    console.log(details)
    return (
        <div className='flex justify-center flex-col items-center my-10'>
            <h1 className='text-3xl my-3'>Service name: {details.name}</h1>
            <img src={details.img} alt="" />
            <button onClick={() => navigate(`/checkout/${serviceId}`)} className='mt-5 bg-green-600 text-white px-4 py-2 rounded-md'>Proccess Checkout</button>
        </div>
    );
};

export default ServiceDetails;