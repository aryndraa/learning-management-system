import {useClassroom} from "../../contexts/ClassroomContext.jsx";
import {PiSortAscendingBold, PiSortDescendingBold} from "react-icons/pi";
import TableItem from "./TableItem.jsx";
import PropTypes from "prop-types";

export const Table = ({data, loading}) => {

  const {orderBy, setOrderBy, direction, setDirection} = useClassroom();

  const handleOrderDirection = (newOrderBy) => {
    if (orderBy === newOrderBy) {
      setDirection((prevDirection) => (prevDirection === "asc" ? "desc" : "asc"));
    } else {
      setOrderBy(newOrderBy);
      setDirection("asc");
    }
  };

  const orderDirectionButton = (column) => {
    return (
      <button className="text-xl" onClick={() => handleOrderDirection(column)}>
        {orderBy === column && direction === "asc" ? <PiSortAscendingBold /> : <PiSortDescendingBold />}
      </button>
    );
  };

  return (
    <>
      <div className="">
          <table className="table rounded-lg bg-white  ">
              <thead>
                  <tr className="text-white bg-primary rounded-lg  border-transparent ">
                      <th className="font-medium text-sm rounded-tl-lg">#</th>
                      <th className="font-medium text-sm">
                        <div className=" flex gap-2 items-center">
                          Class
                          {orderDirectionButton("name")}
                        </div>
                      </th>
                      <th className="font-medium text-sm">
                        <div className=" flex gap-2 items-center">
                          Major
                          {orderDirectionButton("major")}
                        </div>
                      </th>
                      <th className="font-medium text-sm ">
                        <div className="flex gap-2 items-center">
                          Number
                          {orderDirectionButton("number")}
                        </div>
                      </th>
                      <th className="font-medium text-sm">
                        <div className="flex gap-2 items-center">
                          Teacher
                          {orderDirectionButton("teacher")}
                        </div>
                      </th>
                      <th className="font-medium text-sm">
                        <div className="flex gap-2 items-center">
                          Student
                          {orderDirectionButton("students_count")}
                        </div>
                      </th>
                      <th className="font-medium text-sm  rounded-tr-lg"></th>
                  </tr>
              </thead>
              <tbody>
              {loading && data ?
                (
                  <tr>
                    <td>
                      hai
                    </td>
                  </tr>
                )
                :
                <>
                {data.map((item, index) => (

                  <TableItem
                    key={index}
                    id={item.id}
                    classroom={item.classroom}
                    major={item.major}
                    number={item.number}
                    teacherName={item.teacher.name}
                    teacherCode={item.teacher.code}
                    teacherFullName={item.teacher.full_name}
                    teacherAvatar={item.teacher.avatar.file_url}
                    students_count={item.students_count}
                  />
                ))}
                </>
              }
              </tbody>
          </table>
      </div>

    </>
  )
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}