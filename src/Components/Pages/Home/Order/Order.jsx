import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import auth from "../../../../Firebase/firebase.init";

const Order = () => {
  const [user] = useAuthState(auth)
  const [order, setOrder] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const  url = `https://limitless-wave-54217.herokuapp.com/order?email=${email}`;
      try{
        const {data} = await axios.get(url,{
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setOrder(data)
      }
      catch(error){
        console.log(error.response.status,error)
        if(error.response.status === 403 || error.response.status === 401){
          toast.error('please login',{
            id: 'error'
          })
          signOut(auth)
          navigate('/login')
        }
      }
    }
    getOrders()
  }, [user]);
  console.log(order)
  return (
    <div>
        <h1 className="text-center text-2xl my-3">All Places order</h1>
      <div className="flex justify-center flex-col items-center">
        {order.map((singleOrder) => (
          <div key={singleOrder._id} className="my-10">
            <h1>{singleOrder.name}</h1>
            <h1>{singleOrder.address}</h1>
            <h1>{singleOrder.phone}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
