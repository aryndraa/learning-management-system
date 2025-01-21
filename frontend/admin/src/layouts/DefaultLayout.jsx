import Navbar from "../components/navigation/Navbar";
import { useState } from "react";

export default function DefaultLayout ({ children }) {
  const [sideClose, setSideClose] = useState(false)

  return (
    <div className="bg-background">

        <Navbar sideClose={sideClose}/>
        <main className={` px-5 md:px-12 lg:px-8 lg:py-6 text-black min-h-[100vh] ${
          sideClose ? "lg:ml-[6rem]" : "lg:ml-[17rem]"
        }`}>
            {children}
        </main>
    </div>
  )
}
