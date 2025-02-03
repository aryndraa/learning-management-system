import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types";

const NavLink = ({ link, isClose = false }) => {

    const location = useLocation()

    const isActive = link.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(link.path);

    return (
      <Link to={link.path} className={`px-3 md:px-4 py-4 my-2 flex items-center gap-3 text-base lg:text-lg rounded-lg lg:rounded-full font-medium transition ease-in-out duration-300  ${
        isActive  ? "bg-primary text-white" : "bg-transparent text-font-100"
      }`}>
          <span className="text-2xl">{link.icon}</span>
          <span className={`${isClose ? "hidden" : "block"}`}>
            {link.name}
          </span>
      </Link>
    )
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired,
  isClose: PropTypes.bool,
}

export default NavLink