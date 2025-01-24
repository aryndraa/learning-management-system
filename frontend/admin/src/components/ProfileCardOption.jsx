import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FiInfo, FiLogOut, FiUser} from "react-icons/fi";

export const ProfileCardOption = ({modalActive}) => {
  return (
    <>
      <div className={`bg-white md:w-64 lg:w-full  flex-col absolute lg:static right-0 left-0 md:left-[60%] lg:left-[100%] transform translate-y-32 md:translate-y-[8.2rem] lg:translate-y-0 shadow-md lg:shadow-none rounded-lg ${
        modalActive ? "flex" : "hidden lg:flex "
      }`}>
        <Link to={'/profile'} className="py-4 px-4  hover:bg-background md:text-lg flex items-center gap-4 rounded-t-lg lg:rounded-lg">
          <span className="text-xl md:text-2xl "><FiUser/></span>
          Profile
        </Link>
        <Link to={'/options'} className="py-4 px-4  hover:bg-background md:text-lg flex items-center gap-x-4 lg:rounded-lg">
          <span className="text-xl md:text-2xl "><FiInfo/></span>
          Options
        </Link>
        <button className="text-left py-4 px-4 hover:bg-danger/5 md:text-lg flex items-center gap-4 rounded-b-lg lg:rounded-lg text-danger">
          <span className="text-xl md:text-2xl "><FiLogOut/></span>
          Log Out
        </button>
      </div>
    </>
  )
}

ProfileCardOption.propTypes = {
  modalActive: PropTypes.bool.isRequired,
}