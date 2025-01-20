import Logo from "./../Logo"
import { Link } from "react-router-dom"
import { IoIosMenu } from "react-icons/io";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center  px-5 md:px-12 xl:px-24 py-5 md:py-8 relative">
        <button className="text-2xl absolute top-1/2 transform -translate-y-1/2">
          <TfiMenu/>
        </button>
        <div className="m-auto">
            <Logo/>
        </div>
    </div>
  )
}

export default Navbar