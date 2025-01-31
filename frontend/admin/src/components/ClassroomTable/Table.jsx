import { Link } from "react-router-dom"
import {useClassroom} from "../../contexts/ClassroomContext.jsx";
import {PiSortAscendingBold, PiSortDescendingBold} from "react-icons/pi";

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
        <table className="table  rounded-lg bg-white overflow-scroll">
            <thead>
                <tr className="text-white bg-primary rounded-lg  border-transparent">
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
                <tr className="border-transparent border-y border-y-border/40 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium border border-primary transition ease-in-out duration-300 rounded-lg justify-center py-2 px-3 text-sm w-fit text-primary hover:text-white hover:bg-primary ">
                          Overview
                        </Link>
                      </div>
                    </td>
                </tr>
                <tr className="border-transparent border-y border-y-border/40 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium border border-primary transition ease-in-out duration-300 rounded-lg justify-center py-2 px-3 text-sm w-fit text-primary hover:text-white hover:bg-primary ">
                          Overview
                        </Link>
                      </div>
                    </td>
                </tr>
                <tr className="border-transparent border-y border-y-border/40 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium border border-primary transition ease-in-out duration-300 rounded-lg justify-center py-2 px-3 text-sm w-fit text-primary hover:text-white hover:bg-primary ">
                          Overview
                        </Link>
                      </div>
                    </td>
                </tr>
                <tr className="border-transparent border-y border-y-border/40 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium border border-primary transition ease-in-out duration-300 rounded-lg justify-center py-2 px-3 text-sm w-fit text-primary hover:text-white hover:bg-primary ">
                          Overview
                        </Link>
                      </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Table