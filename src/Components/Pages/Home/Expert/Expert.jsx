import React from "react";
import PageTitle from "../../../Shared/PageTitle/PageTitle";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div
    id="experts"
    data-aos="fade-down-right"
    data-aos-delay="50"
    data-aos-duration = '700'
    data-aos-easing='ease-in-out'
    className='bg-slate-500 text-white px-3 py-2 rounded-md'
    >
        <img src={img} alt="" className='rounded-lg'/>
        <h1 className='text-2xl font-thin'>{name}</h1>
        <button className='text-white px-3 py-2 rounded-md my-3 bg-stone-500 hover:bg-stone-800'>Expert Details</button>
    </div>
  );
};

export default Expert;
