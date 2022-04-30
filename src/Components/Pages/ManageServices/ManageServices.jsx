import React, { useState } from "react";
import { toast } from "react-toastify";
import useServices from "../../../Hooks/useServices";

const ManageServices = () => {
    const [reload,setReload] = useState(false)
  const [services,setServices] = useServices(reload);
const handleDelete = (id) => {
    const process = window.confirm('Are you sure?')
    console.log(id)
    if(process){
        const url = `https://limitless-wave-54217.herokuapp.com/service/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('Deleted success',{
                    id: 'delete'
                })
                // setReload(!reload)
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining)
            }
        })
    }
}
  return (
    <div className="w-2/4 mx-auto my-10">
      <h1 className="text-4xl border-b-stone-700 border pb-3 text-center">Manage your services</h1>
      {services.map((service) => (
        <div className="my-4" key={service._id}>
          <h1 className="flex justify-between font-semibold text-xl">
            {service?.name} <button onClick={() => handleDelete(service?._id)} className="border-2 border-slate-600 px-2 m">X</button>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
