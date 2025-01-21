import Logo from "./../Logo"
import { Link } from "react-router-dom"

import { TfiMenu } from "react-icons/tfi";

import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {

  const [sideActive, setSideActive] = useState(false)

  return (
    <>
      <div className="bg-white flex justify-between items-center lg:items-start px-5 md:px-12 xl:px-14 py-5 md:py-6 relative lg:w-fit lg:fixed top-0 left-0 bottom-0 lg:m-4 lg:rounded-lg lg:shadow ">
          <button 
            className="text-2xl absolute top-1/2 transform -translate-y-1/2 lg:hidden"
            onClick={() => {setSideActive(!sideActive)}}
            >
            <TfiMenu/>
          </button>
          <div className="m-auto lg:m-0">
              <Logo/>
          </div>
      </div>
      <Sidebar isActive={sideActive} setSideActive={setSideActive}/>
    </>
  )
}

export default Navbar