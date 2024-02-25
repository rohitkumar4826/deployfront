import { Carde } from "./card";
import { useState } from "react";
export function Hero() {
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the state value
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="bg-gray-100 ">
      <div className="max-w-screen-xl mx-auto p-4 lg:p-5">
        <div className="bg-white shadow-lg sm:rounded-3xl relative overflow-hidden">
          <div className="flex items-center justify-start pt-6 pl-4">
            <span className="w-3 h-3 bg-red-400 rounded-full mr-2" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2" />
            <span className="w-3 h-3 bg-green-400 rounded-full mr-2" />
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                  <img
                    src="https://www.sciastra.com/Assets/Images/newsciastra.jpg"
                    alt="logo"
                    className="h-10 w-10 rounded-full"
                  />
                  SciAstra
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <a
                  href="#"
                  className={`${isActive ? "mr-3 px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out": "mr-3 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"}`}
                  onClick={toggleClass}
                >
                  Login
                </a>
                <button className={`${isActive? "mr-3 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out":"px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out"}`} 
                onClick={toggleClass}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="lg:ml-4 text-center mt-2 lg:mt-10 pb-10">
            <div className="text-xl md:text-3xl font-semibold text-gray-900 leading-snug mb-10 md:w-[60%] mx-auto">
              Learn from scientists and research scholars from top institutes around the world
            </div>
            <Carde />
          </div>
        </div>
      </div>
    </div>
  );
}
