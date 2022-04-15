import React, { useEffect } from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.init";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const handleVerify = () => {
    sendEmailVerification();
  };
  useEffect(() => {
    console.log(user?.emailVerified);
    if (user?.emailVerified) {
      navigate("/");
    }
  }, [user?.emailVerified]);
  if (sending) {
    toast.success("Sending", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div className="text-center">
      <h1 className="text-3xl my-3 font-light">please verify account</h1>
      <button
        onClick={handleVerify}
        className="text-xl bg-green-600 text-white px-3 py-2 rounded"
      >
        {sending ? "Sending" : "Verify email"}
      </button>
    </div>
  );
};

export default VerifyPage;
