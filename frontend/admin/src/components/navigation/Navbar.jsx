import Logo from "./../Logo"
import { Link } from "react-router-dom"
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { RiDashboardFill } from "react-icons/ri";
import { MdClass } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaChalkboardTeacher, FaGlobe, FaSwatchbook } from "react-icons/fa";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <RiDashboardFill/>
  },
  {
    name: "Classroom",
    path: "/",
    icon: <MdClass/>
  },
  {
    name: "Student",
    path: "/",
    icon: <IoPeople/>
  },
  {
    name: "Teacher",
    path: "/",
    icon: <FaChalkboardTeacher/>  
  },
  {
    name: "Major",
    path: "/",
    icon : <FaGlobe/>
  },
  {
    name: "Subject",
    path: "/",
    icon: <FaChalkboardTeacher/>
  },
]

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
      <div className="bg-white fixed left-0 top-0 bottom-0 w-[80%] rounded-lg py-4 ">
        <button className="flex justify-between items-center text-xl gap-1 font-medium px-4 mb-5">
          <span className="text-3xl"> 
            <IoClose/>
          </span>
          Menu
        </button>
        
        <ul className="px-5">
          {links.map((link, index) => (
            <li key={index}>
              <Link  to={link.path} className="px-4 py-4 flex gap-3 text-lg rounded-lg ">
              <span className="text-2xl">{link.icon}</span>
              {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar