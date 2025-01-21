import NavLink from "./NavLink"
import { RiDashboardFill } from "react-icons/ri";
import { MdClass } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaChalkboardTeacher, FaGlobe, FaSwatchbook } from "react-icons/fa";

const Navigation = () => {

    const links = [
      {
        name: "Dashboard",
        path: "/",
        icon: <RiDashboardFill/>
      },
      {
        name: "Classroom",
        path: "/classroom",
        icon: <MdClass/>
      },
      {
        name: "Student",
        path: "/student",
        icon: <IoPeople/>
      },
      {
        name: "Teacher",
        path: "/teacher",
        icon: <FaChalkboardTeacher/>  
      },
      {
        name: "Major",
        path: "/major",
        icon : <FaGlobe/>
      },
      {
        name: "Subject",
        path: "/subject",
        icon: <FaChalkboardTeacher/>
      },
    ]

    return (
      <ul className="px-5 lg:px-0">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink link={link}/>
            </li>
          ))}
      </ul>
    )
}

export default Navigation