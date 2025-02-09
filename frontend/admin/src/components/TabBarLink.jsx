import { Link, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

export const TabBarLink = ({ link }) => {
  const match = useMatch(link.path); // Mencocokkan dengan path dinamis

  return (
    <Link
      to={link.path}
      className={`py-3 px-4 lg:py-2 font-medium text-font-100 hover:bg-neutral-100 rounded-lg  ${
        match ? "lg:bg-primary lg:text-white lg:hover:bg-primary" : ""
      }`}
    >
      {link.name}
    </Link>
  );
};

TabBarLink.propTypes = {
  link: PropTypes.object.isRequired,
};
