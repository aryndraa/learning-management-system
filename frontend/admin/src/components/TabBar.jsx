import { GoKebabHorizontal } from "react-icons/go"
import { useState } from "react"
import { TabBarLink } from "./TabBarLink";
import PropTypes from "prop-types";

export const TabBar = ({links}) => {
  const [openNav, setOpenNav] =  useState();

  return (
    <>
      <div className="flex lg:hidden justify-between relative items-center p-4 bg-white">
        <div>
          <h2 className="text-xl font-medium text-font-300">Overview</h2>
        </div>
        <div className="flex">
          <button className="text-2xl" onClick={() => setOpenNav(!openNav)}><GoKebabHorizontal/></button>
        </div>
      </div>
       <div className={`flex-col lg:flex-row lg:gap-4 lg:p-4 bg-white rounded-lg  ${
        openNav ? "flex" : "hidden lg:flex"
      }`}>
        {links.map((link, index) => (
          <TabBarLink link={link} key={index}/>
        ))}
      </div>
    </>

  )
}

TabBar.propTypes = {
  links: PropTypes.object.isRequired
}