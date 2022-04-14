import { Link } from "react-router-dom";

const Signup = () => {
  const handleRegisterFrom = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
  };
  return (
    <div className="block mx-auto my-10 p-6 rounded-lg shadow-lg bg-white max-w-lg">
      <h1 className="text-4xl mb-10 text-center text-blue-600 ">
        Please Register
      </h1>
      <form onSubmit={handleRegisterFrom}>
        <div className="form-group mb-6">
          <input
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
        </div>
        <div className="form-group mb-6">
          <input
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
        </div>
        <div className="form-group mb-6">
          <input
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
        </div>
        <div className="form-group mb-6">
          <input
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
