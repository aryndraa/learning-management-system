import {Link} from "react-router";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import PropTypes from "prop-types";

export const NavProfileModal = ({active = false}) => {


  return (
    <div className={`flex-col absolute right-0 top-20 z-10 bg-white  shadow w-64 rounded-lg ${
      active ? "flex" : "hidden"
    }`}>
      <Link to={'/'} className="font-medium flex items-center gap-4 py-5 hover:bg-background  px-6" >
        <span className="text-xl"><FaRegUser/></span>
        Your Profile
      </Link>
      <Link to={'/'} className="font-medium flex items-center gap-4 py-5 hover:bg-background  px-6" >
        <span className="text-2xl"><AiOutlineSchedule/></span>
        Your Schedule
      </Link>
      <Link to={'/'} className="font-medium flex items-center gap-4 py-5 hover:bg-background  px-6" >
        <span className="text-2xl"><LuListTodo/></span>
        Your Todo list
      </Link>
    </div>
  )
}

NavProfileModal.propTypes = {
  active: PropTypes.bool.isRequired,
}