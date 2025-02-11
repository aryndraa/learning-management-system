import { GoKebabHorizontal } from "react-icons/go";
import { useState } from "react";
import { TabBarLink } from "./TabBarLink";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const TabBar = ({ links }) => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();
  const basePath = location.pathname.split("/").slice(0, 3).join("/");


  return (
    <>
      <div className="flex lg:hidden justify-between relative items-center p-4 bg-white">
        <div>
          <h2 className="text-xl font-medium text-font-300">Overview</h2>
        </div>
        <div className="flex">
          <button className="text-2xl" onClick={() => setOpenNav(!openNav)}>
            <GoKebabHorizontal />
          </button>
        </div>
      </div>
      <div
        className={`flex-col lg:flex-row lg:gap-4 lg:p-4 bg-white rounded-lg ${
          openNav ? "flex" : "hidden lg:flex"
        }`}
      >
        {links.map((link, index) => (
          <TabBarLink key={index} link={{ ...link, path: `${basePath}/${link.path}` }} />
        ))}
      </div>
    </>
  );
};

TabBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
