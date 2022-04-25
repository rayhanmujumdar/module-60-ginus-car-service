import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import useDetails from '../../../../Hooks/useDetails';

const Process = () => {
    const {processId} = useParams()
    const [service] = useDetails(processId)
    const [user,] = useAuthState(auth)
    // input value useState set tip and tricks
    // const [user,setUser] = useState({
    //     name: 'Rayhan',
    //     email: 'rayhan@gmail.com',
    //     address: 'hajigonj',
    //     phone: '01776464685',
    // })
    // const handleAddress = (e) => {
    //     const {address,...rest} = user
    //     const newAddress = e.target.value
    //     const newUser = {address: newAddress,...rest}
    //     console.log(newUser)
    //     setUser(newUser)
    // }

    const handlePlaceOrder = (e) => {
        e.preventDefault()
        const order = {
            name: user.displayName,
            email: user.email,
            service: service.name,
            serviceId: processId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
        .then(response => {
            const {data} = response
            toast.success('order successfull')
            e.target.reset()
        })
    }
    return (
        <div className='min-h-screen'>
            <h1 className='text-center my-5 text-2xl'>Please order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder} className='flex flex-col gap-y-3 justify-center items-center bg-red-300 md:w-2/4 w-5/6 mx-auto py-20 rounded-md px-6'>
                <input value={user?.displayName} className='border border-black px-2 h-10 w-full' type="text" name='name' placeholder='Your Name' required readOnly disabled/>
                <input value={user?.email} className='border border-black px-2 h-10 w-full' type="email" name='email' placeholder='Your email' required readOnly disabled/>
                <input value={service.name} className='border border-black px-2 h-10 w-full' type="text" name='service' placeholder='Service' required readOnly/>
                <input className='border border-black px-2 h-10 w-full' type="text" name='address' placeholder='Address' autoComplete='off' required/>
                <input className='border border-black px-2 h-10 w-full' type="phone" name='phone' placeholder='Phone Number' autoComplete='off' required/>
                <input className='bg-slate-700 px-10 py-2 text-white rounded-md' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Process;