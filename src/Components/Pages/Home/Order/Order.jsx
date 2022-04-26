import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../Firebase/firebase.init";

const Order = () => {
  const [user] = useAuthState(auth)
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const  url = `http://localhost:5000/order?email=${email}`;
      const {data} = await axios.get(url)
      setOrder(data)
    }
    getOrders()
  }, [user]);
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
