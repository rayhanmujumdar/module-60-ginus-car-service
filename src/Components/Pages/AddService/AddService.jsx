import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const formRef = useRef(null)
  const onSubmit = (data) => {
    console.log(data)
    const url = `http://localhost:5000/service`;
    fetch(url,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            toast.success("Add to success",{
                id: 'success'
            })
            formRef.current.reset()
        }
    })
  };
  return (
    <div className="w-2/4 mx-auto bg-red-400 p-6 my-10">
      <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-3 pl-2 py-2" placeholder="Service Name" {...register("name", { required: true, maxLength: 20 })} />
        <textarea className="mb-3 pl-2 py-2" placeholder="description" {...register("description")} />
        <input className="mb-3 pl-2 py-2" placeholder="price" type="number" {...register("price")} />
        <input className="mb-3 pl-2 py-2" placeholder="Photo URL" type="text" {...register("img")} />
        <input type="submit" value={"Add Service"} className="bg-stone-600 py-2 text-white"/>
      </form>
    </div>
  );
};

export default AddService;
