import Logo from "./../Logo"
import { Link } from "react-router-dom"

import { TfiMenu } from "react-icons/tfi";

import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {

  const [sideActive, setSideActive] = useState(false)

  return (
    <>
      <div className="bg-white flex justify-between items-center  px-5 md:px-12 xl:px-24 py-5 md:py-8 relative">
          <button 
            className="text-2xl absolute top-1/2 transform -translate-y-1/2"
            onClick={() => {setSideActive(!sideActive)}}
          >
            <TfiMenu/>
          </button>
          <div className="m-auto">
              <Logo/>
          </div>
      </div>

      <Sidebar isActive={sideActive} setSideActive={setSideActive}/>
    </>
  )
}

export default Navbar