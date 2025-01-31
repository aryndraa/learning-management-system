import Navbar from "../components/navigation/Navbar";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

export default function DefaultLayout ({ children }) {
  const [sideClose, setSideClose] = useState(false)

  return (
    <div className="bg-background overflow-hidden">
      <div className="relative  ">
        <Navbar sideClose={sideClose}>
          <button 
            className={`hidden lg:block absolute  -z-10 bg-white p-4 rounded-full transform transition ease-in-out duration-300 opacity-0 group-hover:opacity-100 ${
              sideClose ? "rotate-0 -right-[20%]" : "rotate-180 -right-[8%]"
            }`}
            onClick={() => setSideClose(!sideClose)}
          >
            <FaChevronRight/>
          </button>
        </Navbar>
      </div>
      <main className={`px-3 md:px-12 lg:px-8 py-4 lg:py-6 text-black min-h-[100vh]  transition-all duration-300 ease-out  ${
        sideClose ? "lg:ml-[6rem]" : "lg:ml-[17rem]"
      }`}>
          {children}
      </main>
    </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
