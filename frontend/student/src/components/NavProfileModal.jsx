import {Link} from "react-router";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import PropTypes from "prop-types";
import {IoMenuOutline} from "react-icons/io5";
import {useState} from "react";

export const NavProfileModal = () => {

  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      <button className="text-2xl" onClick={() => setModalActive(!modalActive)}>
        <IoMenuOutline/>
      </button>

      <div className={`flex-col absolute right-0 top-20 z-10 bg-white  shadow w-64 rounded-lg ${
        modalActive ? "flex" : "hidden"
      }`}>
        <Link to={'/'} className="font-medium flex items-center gap-4 py-5 hover:bg-background  px-6">
          <span className="text-xl"><FaRegUser/></span>
          Your Profile
        </Link>
        <Link to={'/'} className="font-medium flex items-center gap-4 py-5 hover:bg-background  px-6">
          <span className="text-2xl"><AiOutlineSchedule/></span>
          Your Schedule
        </Link>
        <Link to={'/'} className="font-medium flex items-center gap-4 py-5 hover:bg-background  px-6">
          <span className="text-2xl"><LuListTodo/></span>
          Your Todo list
        </Link>
      </div>
    </>
  )
}

NavProfileModal.propTypes = {
  active: PropTypes.bool.isRequired,
}