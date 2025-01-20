import { Link, useLocation } from "react-router-dom"

const NavLink = ({ link }) => {

    const location = useLocation()

    return (
      <Link to={link.path} className={`px-3 py-4 my-2 flex items-center gap-3 text-lg rounded-lg font-medium ${
        location.pathname == link.path ? "bg-primary text-white" : ""
      }`}>
          <span className="text-2xl">{link.icon}</span>
          {link.name}
      </Link>
    )
}

export default NavLink