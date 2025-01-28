import {Link} from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const Item = () => {
  return (
    <>
      <div className="border-b last:border-b-transparent p-2 pb-4 mb-4 border-border ">
        <div className="flex gap-4 mb-4">
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-2">
              <h4 className="font-medium text-font-200">Class</h4>
              <h4 className="font-medium text-font-200">Major</h4>
              <h4 className="font-medium text-font-200">Number</h4>
              <h4 className="font-medium text-font-200">Teacher</h4>
            </div>
            <div className="flex flex-col gap-2">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-font-100">Soul</p>
            <p className="text-font-100">Web Development</p>
            <p className="text-font-100">12</p>
            <p className="text-font-100">Pak Slebew</p>
          </div>
        </div>
        <div>
          <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium bg-primary/50 rounded-lg justify-center py-3 px-4 text-white">
            Overview
            <span><FaChevronRight/></span>
          </Link>
        </div>
      </div>
    </>
  )
}