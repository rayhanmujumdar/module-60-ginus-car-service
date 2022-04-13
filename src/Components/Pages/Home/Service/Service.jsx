import React, { useState } from 'react';

const Service = ({service}) => {
    const {name,img,price,description} = service
    const [toggle,setToggle] = useState(false)
    const handleDiscription = (toggle) => {
        setToggle(toggle)
    }
    return (
        <div data-aos="fade-up" className='lg:w-full md:w-[450px] '>
            <div className='flex flex-col item-center justify-center bg-stone-600 rounded-md text-white md:p-4 hover:scale-[0.98] duration-500 hover:shadow-xl'
        >
            <img src={img} alt="" className='lg:min-w-3/4 md:min-w-3/4 w-full rounded'/>
            <div className='p-3 md:p-0 text-left'>
                <h2 className='text-2xl lg:text-4xl'>{name}</h2>
                <p className='text-xl'>Price: ${price || 'comming soon'}</p>
                <p onClick={() => handleDiscription(!toggle)} className={`text-red-600 underline cursor-pointer ${toggle && 'animate-none'} animate-pulse hover:animate-none text-[17px]`}>Description</p>
                {
                    toggle && <p>{description}</p>
                }
                <button className='bg-stone-500 mt-3 px-3 py-2 rounded-lg hover:bg-stone-800 hover:duration-700 duration-700'>Book: {name}</button>
            </div>
        </div>
        </div>
    );
};

export default Service;