import React from "react";
import useServices from "../../../../Hooks/useServices";
import PageTitle from "../../../Shared/PageTitle/PageTitle";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices, loading] = useServices();
  const dataLoading = (
    <div className="bg-stone-300 bg-opacity-30 h-screen w-full flex justify-center items-center min-h-full">
      <PageTitle title='services'></PageTitle>
        <div className="flex items-center justify-center bg-black bg-opacity-20">
        <button
            type="button"
            className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-lg text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
            disabled=""
        >
            <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
            </svg>
            waiting...
        </button>
        </div>
    </div>
  );
  const load = loading && dataLoading
  return (
    load || <div id="services">
      <h1 className="text-4xl mt-3 font-mono text-center">
        Our services: {services.length}
      </h1>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 justify-center lg:gap-10
            gap-6 my-10 mx-3 justify-items-center"
      >
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
