import React from "react";
import logo from "../Assets/logo.jpg";
import Right from "../Assets/92309-online-doctor.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-evenly ">
      <div className="flex flex-col justify-between md:h-auto">
        <img className="h-16 w-16 rounded-full" src={logo} alt="DoctorG" />
        <div className="my-16">
          <h1 className="text-6xl font-bold font-quicksand">
            Secure Medical History Here
          </h1>
          <h3 className="text-xl font-serif">
            Upload and access your medical documents anywhere anytime
          </h3>
          <div className="my-8">
            <a
              href="#_"
              className="box-border mr-4 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                Login Now
              </span>
            </a>
            <a
              href="#_"
              className="box-border ml-4 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                Create Account
              </span>
            </a>
          </div>
        </div>
      <div>
        <p>Follow us on</p>
        <div className="flex">
          <p className="mr-4">facebook</p>
          <p className="mr-4">instagram</p>
          <p className="mr-4">twitter</p>
          <p className="mr-4">Linkedin</p>
        </div>
      </div>
      </div>
      <div className="mt-[8%] md:w-1/2 lg:w-1/3">
        <Lottie animationData={Right} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
