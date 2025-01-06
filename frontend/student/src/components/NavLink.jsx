import {Link, useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export const NavLink = ({ path, name }) => {
  const navigate = useLocation();

  return (
    <Link to={path} className={`font-medium  ${
       navigate.pathname === path ? "text-primary" : "text-font-100" 
    }`}>
      {name}
    </Link>
  )
}

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};