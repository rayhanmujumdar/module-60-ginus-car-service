import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const [details,setDetails] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    console.log(details)
    return (
        <div>
            <h1>service name: {details.name}</h1>
            <img src={details.img} alt="" />
        </div>
    );
};

export default ServiceDetails;