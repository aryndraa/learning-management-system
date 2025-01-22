import Logo from "./../Logo"

import { TfiMenu } from "react-icons/tfi";

import Sidebar from "./Sidebar";
import { useState } from "react";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Navbar = ({sideClose = false, children}) => {

  const [sideActive, setSideActive] = useState(false)
  return (
    <>
      <div className={`group bg-white flex lg:flex-col justify-between lg:justify-normal items-center lg:items-center px-5  py-5 md:py-6 relative lg:fixed top-0 left-0 bottom-0 lg:m-4 lg:rounded-lg lg:shadow  ${
        sideClose ? "lg:w-fit" : "lg:w-64 "
      } `}>
          <button 
            className="text-2xl absolute top-1/2 transform -translate-y-1/2 lg:hidden"
            onClick={() => {setSideActive(!sideActive)}}
            >
            <TfiMenu/>
          </button>
          <div className="m-auto lg:m-0 lg:mb-8">
              <Logo isClose={sideClose}/>
          </div>
          <div className="hidden lg:block lg:w-full">
            <Navigation isClose={sideClose}/>
          </div>
          {children}
      </div>

      <Sidebar isActive={sideActive} setSideActive={setSideActive}/>
    </>
  )
}

Navbar.propTypes = {
  sideClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Navbar