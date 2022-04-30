import React, { useEffect, useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../Firebase/firebase.init";
import SocialLogin from "../SocialLogIn/SocialLogin";
import toast from 'react-hot-toast'
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
 
  const [signInWithEmailPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  //google authentiction
  const [signInWithGoogle, googleUser,googleLoad,googleError] = useSignInWithGoogle(auth);
    const handleGoogleAuth = () => {
        signInWithGoogle()
    }
  //from authentication
  const handleSummitForm = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value
    console.log(email)
    const password = passwordRef.current.value
    await signInWithEmailPassword(email,password)
    const {data} = await axios.post('https://limitless-wave-54217.herokuapp.com/login',{email})
    console.log(data)
    localStorage.setItem('accessToken',data?.accessToken)
  };
  useEffect(() => {
    const socialAndFromuser = user || googleUser
    if(socialAndFromuser){
      navigate(from,{replace: true})
      toast.success('✔️ Successfully login',{
        autoClose: 1000,
      })
    }
  },[user,googleUser])
  if(sending){
    return <div>Updating....</div>
  }
  if(loading){
    return <p>Loading...</p>
  }
  if(error || googleError){
    toast.error(googleError?.message || error?.message,{
      id: 'error'
    })
  }
  const handleResetPassword = async () => {
   if(emailRef.current.value === ''){
      alert('please type your email box')
   }else{
      await sendPasswordResetEmail(emailRef.current.value)
      alert("send email")
   }
   
  }
  return (
    <div className="block mx-auto my-10 p-6 rounded-lg drop-shadow-xl shadow-inner bg-white max-w-lg">
      <PageTitle title="Login"></PageTitle>
      <h1 className="text-4xl mb-10 text-center text-blue-600 ">
        Please Log in
      </h1>
      <form onSubmit={handleSummitForm}>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputEmail2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Email address
          </label>
          <input
            ref={emailRef}
            type="email"
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="exampleInputPassword2"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword2"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck2"
            >
              Remember me
            </label>
          </div>
          <a
          onClick={handleResetPassword}
            href="#!"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
        >
          Log in
        </button>
        <p className="text-gray-800 mt-6 text-center">
          Not a member for genius car?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
          >
            Register
          </Link>
        </p>
      </form>
      <SocialLogin handleGoogleAuth={handleGoogleAuth}></SocialLogin>
    </div>
  );
};

export default Login;
