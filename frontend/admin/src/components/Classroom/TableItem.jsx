import { Link } from "react-router-dom"
import PropTypes from "prop-types";

const TableItem = ({id, numberItem, classroom, major, number, teacherName, teacherFullName, teacherAvatar, teacherCode, students_count}) => {
  return (
    <tr className="border-transparent border-y border-y-border/40 hover:bg-primary/5 transition text-font-300 text-base ">
      <td>{numberItem}</td>
      <td>{classroom}</td>
      <td>{major}</td>
      <td>{number}</td>
      <td className="group">
        <Link 
          to={"classroom/:classroom"}
          className="bg-primary/10 hover:bg-primary/20 text-sm transition ease-in-out duration-300 rounded-lg text-primary font-medium px-3 py-2 "
        >
          {teacherName}
        </Link>
        <div className="absolute bg-white px-3 py-3 rounded-lg w-64 hidden mt-3 group-hover:flex items-center gap-2 shadow">
            {teacherAvatar ?
              <div className="w-10 max-h-10 ">
                  <img
                    src={teacherAvatar}
                    alt=""
                    className="w-full h-10 object-cover rounded-full"
                  />
              </div>
              :
              <div className="w-10 min-h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium" >
                {teacherName.substring(0, 1)}
              </div>
            }
          <div>
            <h3 className="text-sm font-medium text-font-300 mb-1">{teacherFullName}</h3>
            <p className="text-xs font-medium text-font-100">Code : {teacherCode}</p>
          </div>
        </div>
      </td>
      <td>{students_count}</td>
      <td>
        <div>
          <Link to={`/classroom/${id}`} className="flex items-center gap-2 font-medium border border-primary transition ease-in-out duration-300 rounded-lg justify-center py-2 px-3 text-sm w-fit text-primary hover:text-white hover:bg-primary ">
            Overview
          </Link>
        </div>
      </td>
    </tr>
  )
}

TableItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberItem: PropTypes.number,
  classroom: PropTypes.string,
  major: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  teacherName: PropTypes.string,
  teacherFullName: PropTypes.string,
  teacherAvatar: PropTypes.string,
  teacherCode: PropTypes.string,
  students_count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TableItem