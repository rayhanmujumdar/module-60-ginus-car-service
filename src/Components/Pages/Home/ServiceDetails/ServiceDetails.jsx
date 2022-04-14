import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../../Hooks/useServices';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [details,setDetails] = useState({})
    const [services,setServices] = useServices()
    console.log(services)
    useEffect(() => {
        const expert = services.find(service => service?.id === Number(serviceId))
        setDetails(expert)
    },[services])
    console.log(details)
    return (
        <div>
            <h1>service details{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;