import {useClassroom} from "../../contexts/ClassroomContext.jsx";
import {PiSortAscendingBold, PiSortDescendingBold} from "react-icons/pi";
import TableItem from "./TableItem.jsx";

const Table = () => {

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
                          {orderDirectionButton("classroom")}
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
                          {orderDirectionButton("student")}
                        </div>
                      </th>
                      <th className="font-medium text-sm  rounded-tr-lg"></th>
                  </tr>
              </thead>
              <tbody>
                <TableItem/>
              </tbody>
          </table>
      </div>

    </>
  )
}

export default Table