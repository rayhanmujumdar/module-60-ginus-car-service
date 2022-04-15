import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { toast } from "react-toastify";


const Signup = () => {
  const [user,setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error,setError] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [
    createUserWithEmailAndPassword,
    userWithSignUp,
    loading,
    errorWithSignUp,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfiles,updating] = useUpdateProfile(auth)
  const navigate = useNavigate()
  const handleRegisterFrom = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(user?.email,user?.confirmPassword)
    .then(() =>{
      const displayName = user?.name
      updateProfiles({ displayName })
    })
  };

  const handleName = (e) => {
    setUser({...user,name: e.target.value})
  }
  const handleEmail = (e) => {
    if(/[@]/.test(e.target.value)){
      setUser({...user,email: e.target.value})
      setError({...error,email: ''})
    }else if(e.target.value === ''){
      setError({...error,email: ''})
    }else{
      setUser({...user,email: ''})
      setError({...error,email: 'invalid'})
    }
  }
  const handlePassword = (e) => {
    if(e.target.value.length >= 6){
      setUser({...user,password: e.target.value})
      setError({...error,password: ''})
    }
    else if(e.target.value === ''){
      setError({...error,password: ''})
    }else{
      setUser({...user,password: ''})
      setError({...error,password: 'minimum 6 character'})
    }
  }
  const handleConfirmPassword = (e) => {
    if(user?.password === e.target.value){
      setUser({...user,confirmPassword: e.target.value})
      setError({...error,confirmPassword: ''})
    }
    else if(e.target.value === ''){
      setError({...error,confirmPassword: ''})
    }else{
      setUser({...user,confirmPassword: ''})
      setError({...error,confirmPassword: 'Password Missmatch'})
    }
  }
  useEffect(() => {
    if(userWithSignUp){
      toast('✔️ Successfully login!');
      navigate('/verify')
    }
  },[userWithSignUp]) 
  useEffect(() => {
    if(errorWithSignUp){
      switch(errorWithSignUp?.code){
        case 'auth/email-already-in-use':
          toast.error('❌ Email already exist')
          break;
        case 'auth/invalid-password"':
          toast.error('❌ Invalid email provided, please provide a valid email')
        break
        default:
        toast('someting went wrong')
      }
    }
  },[errorWithSignUp])
  console.log(errorWithSignUp?.code)
  const missMatchPass =  error?.password === error?.confirmPassword
  console.log(missMatchPass)
  return (
    <div className="block mx-auto my-10 p-6 rounded-lg shadow-lg bg-white max-w-lg">
      <h1 className="text-4xl mb-10 text-center text-blue-600 ">
        Please Register
      </h1>
      <form onSubmit={handleRegisterFrom}>
        <div className="form-group mb-6 relative">
          <input
          onChange={handleName}
            name="name"
            type="text"
            className="form-control
            block
            w-full
            px-3
            py-2
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
            id="exampleInput123"
            aria-describedby="emailHelp123"
            placeholder="Your name"
            required
          />
          {
            user?.name ? <FontAwesomeIcon icon={faCheck} className='absolute top-3 right-3 text-green-600'></FontAwesomeIcon> : ''
          }
        </div>
        <div className="form-group mb-6 relative">
          <input
          onChange={handleEmail}
            name="email"
            type="email"
            className="form-control block
            w-full
            px-3
            py-2
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
            id="exampleInput125"
            placeholder="Email address"
            required
          />
          {
            user?.email ? <FontAwesomeIcon icon={faCheck} className='absolute top-3 right-3 text-green-600'></FontAwesomeIcon> : ''
          }
          <p className={`text-red-600 mt-1 ${error.email && "before:content-['❌']"}`}>{error?.email}</p>
        </div>
        <div className="form-group mb-6 relative">
          <input
          onChange={handlePassword}
            name="password"
            type="password"
            className="form-control block
            w-full
            px-3
            py-2
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
            id="exampleInput126"
            placeholder="Password"
            required
          />
          {
            user?.password ? <FontAwesomeIcon icon={faCheck} className='absolute top-3 right-3 text-green-600'></FontAwesomeIcon> : ''
          }
          <p  className={`text-red-600 mt-1 ${error.password && "before:content-['❌']"}`}>{error?.password}</p>
        </div>
        <div className="form-group mb-6 relative">
          <input
          onChange={handleConfirmPassword}
            name="confirmPassword"
            type="password"
            className="form-control block
            w-full
            px-3
            py-2
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
            id="exampleInput126"
            placeholder="Confirm Password"
            required
          />
          {
            user?.confirmPassword && user?.password ? <FontAwesomeIcon icon={faCheck} className='absolute top-3 right-3 text-green-600'></FontAwesomeIcon> : ''
          }
          <p  className={`text-red-600 mt-1 ${ missMatchPass || "before:content-['❌']"}`}>{missMatchPass ?  '' : error?.confirmPassword }</p>
        </div>
        <div className="form-group form-check text-center mb-6">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-stone-400 rounded-sm bg-white checked:bg-green-700 checked:border-green-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck25"
            defaultChecked
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="exampleCheck25"
          >
            Subscribe to our genius car
          </label>
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
          Sign up
        </button>
      </form>
      <p className="my-2 font-thin text-center my-6">
        I hava already an account
        <Link to="/login" className="underline text-blue-700">
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
