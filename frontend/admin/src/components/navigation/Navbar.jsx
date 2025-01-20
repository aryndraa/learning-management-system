import Logo from "./../Logo"
import { Link } from "react-router-dom"
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";

import Navigation from "./Navigation";

const Navbar = () => {
  return (
    <>
      <div className="bg-white flex justify-between items-center  px-5 md:px-12 xl:px-24 py-5 md:py-8 relative">
          <button className="text-2xl absolute top-1/2 transform -translate-y-1/2">
            <TfiMenu/>
          </button>
          <div className="m-auto">
              <Logo/>
          </div>
      </div>
      <div className="bg-white fixed left-0 top-0 bottom-0 w-[80%] rounded-lg py-5 ">
        <button className="flex justify-between items-center text-xl gap-1 font-medium px-4 mb-8">
          <span className="text-3xl"> 
            <IoClose/>
          </span>
          Menu
        </button>
        
        <Navigation/>
      </div>
    </>
  )
}

export default Navbar