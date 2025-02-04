import { IoClose } from "react-icons/io5";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const Sidebar = ({ isActive = false, setSideActive }) => {


    return (
        <div className="lg:hidden">
            <div 
                className={`min-h-screen w-full z-40 fixed top-0 left-0 bottom-0 right-0 bg-font-100/40 ${
                    isActive ? "block" : "hidden"
                }`}
                onClick={() => { setSideActive(!isActive) }}
            ></div>

            
            <div className={`bg-white  fixed z-50 left-0 top-0 bottom-0 w-[100%]  rounded-xl py-5 md:px-8 transform  transition duration-500 ease-in-out ${
                isActive ? "translate-y-[28%] md:translate-y-[45%]" : "translate-y-[100%] "
            }`}>
                <button 
                    className="flex justify-between items-center text-xl gap-1 font-medium px-4 mb-8 "
                    onClick={() => { setSideActive(!isActive) }}
                >
                  <span className="text-3xl"> 
                    <IoClose/>
                  </span>
                  Menu
                </button>

                <Navigation/>
            </div>
        </div>
    )
}

Sidebar.propTypes = {
  isActive: PropTypes.bool,
  setSideActive: PropTypes.func,
}

export default Sidebar