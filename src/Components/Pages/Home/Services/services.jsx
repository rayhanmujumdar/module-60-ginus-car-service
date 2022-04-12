import React from 'react';
import useServices from '../../../../Hooks/useServices';

const Services = () => {
    const [services,setServices] = useServices()
    console.log(services)
    return (
        <div>
            <h1>this is services</h1>            
        </div>
    );
};

export default Services;
