import Navbar from "../components/navigation/Navbar";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function DefaultLayout ({ children }) {
  const [sideClose, setSideClose] = useState(false)

  return (
    <div className="bg-background">
      <div className="relative ">
        <Navbar sideClose={sideClose}>
          <button 
            className={`absolute -right-[8%] -z-10 bg-white p-4 rounded-full transform transition ease-in-out duration-300 opacity-0 group-hover:opacity-100 ${
              sideClose ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setSideClose(!sideClose)}
          >
            <FaChevronRight/>
          </button>
        </Navbar>
      </div>
      <main className={` px-5 md:px-12 lg:px-8 lg:py-6 text-black min-h-[100vh] ${
        sideClose ? "lg:ml-[6rem]" : "lg:ml-[17rem]"
      }`}>
          {children}
      </main>
    </div>
  )
}
