import NavLink from "./NavLink"
import { RiDashboardFill } from "react-icons/ri";
import { MdClass } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaChalkboardTeacher, FaGlobe} from "react-icons/fa";
import PropTypes from "prop-types";

const Navigation = ({isClose = false}) => {

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
              <NavLink link={link} isClose={isClose}/>
            </li>
          ))}
      </ul>
    )
}

Navigation.propTypes = {
  isClose: PropTypes.bool,
}

export default Navigation