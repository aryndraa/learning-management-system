import { Link } from "react-router-dom"
import { GoKebabHorizontal } from "react-icons/go"
import { useState } from "react"

export const TabBar = () => {
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
       <div className={`flex-col lg:flex-row lg:gap-2 lg:p-4 bg-white rounded-lg  ${
        openNav ? "flex" : "hidden lg:flex"
      }`}>
        <Link to={'/'} className="py-3 px-4 lg:py-2  font-medium text-font-100 hover:bg-neutral-100">Overview</Link>
        <Link to={'/'} className="py-3 px-4 lg:py-2  font-medium text-font-100 hover:bg-neutral-100">Subject Teachers</Link>
        <Link to={'/'} className="py-3 px-4 lg:py-2  font-medium text-font-100 hover:bg-neutral-100">List Students</Link>
      </div>
    </>

  )
}