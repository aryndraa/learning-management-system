import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export const NavTabLink = ({ path, name }) => {
  return (
    <Link to={path} className="font-medium text-font-100" >{name}</Link>
  )
}

NavTabLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};