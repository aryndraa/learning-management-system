import {Link} from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

export const Item = ({id, classroom, major, number, teacher, students_count}) => {
  return (
    <>
      <div className="border-b last:border-b-transparent p-2 pb-4 mb-4 border-border ">
        <div className="flex gap-4 mb-4 mx-2">
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-3 text-sm md:text-lg">
              <h4 className="font-medium text-font-200">Class</h4>
              <h4 className="font-medium text-font-200">Major</h4>
              <h4 className="font-medium text-font-200">Number</h4>
              <h4 className="font-medium text-font-200">Teacher</h4>
              <h4 className="font-medium text-font-200">Students</h4>
            </div>
            <div className="flex flex-col gap-3 text-sm md:text-lg">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 text-sm md:text-lg">
            <p className="text-font-100 capitalize">{classroom}</p>
            <p className="text-font-100 capitalize">{major}</p>
            <p className="text-font-100 capitalize">{number}</p>
            <p className="text-font-100 capitalize">{teacher}</p>
            <p className="text-font-100 capitalize">{students_count}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/classroom/${id}`} className="flex w-[80%] items-center gap-2 font-medium border border-primary bg-primary rounded-lg justify-center py-3 px-4 text-white">
            Overview
            <span><FaChevronRight/></span>
          </Link>
          <Link to={`/teacher/${id}`} className="flex items-center gap-2 font-medium border-primary border rounded-lg justify-center py-3 px-3 text-primary">
            Teacher
          </Link>
        </div>
      </div>
    </>
  )
}

Item.propTypes = {
  classroom: PropTypes.string,
  major: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  teacher: PropTypes.string,
  students_count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}