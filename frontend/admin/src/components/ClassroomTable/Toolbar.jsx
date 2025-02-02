import { MdOutlineAddCircleOutline } from "react-icons/md";
import {Direction} from "./Direction.jsx";
import {Link} from "react-router";
import {Search} from "./Search.jsx";
import {Filter} from "./Filter.jsx";
import {CheckStatus } from "./CheckStatus.jsx";
import {useClassroom} from "../../contexts/ClassroomContext.jsx";

export const Toolbar = () => {
  const { meta } = useClassroom();

  return (
    <div className="lg:flex">
      <div className="mb-4 bg-white rounded-lg p-4 flex flex-col lg:flex-row lg:items-center gap-4 lg:flex-1">
        <div className="lg:flex-1">
          <Search/>
        </div>
        <div className="flex  items-stretch justify-between gap-4">
          <CheckStatus/>
          <div className="flex gap-2 lg:hidden">
            <Filter/>
            <Direction/>
          </div>
        </div>
      </div>
      <div
        className="mb-4 flex justify-between lg:justify-end bg-white lg:gap-6 items-center  p-4  rounded-lg lg:flex-1">
        <span className="text-lg font-medium text-font-200">{meta.total ?? "-" } Items</span>
        <Link className="py-2 px-3 w-fit bg-primary font-medium text-white rounded-lg flex gap-1 items-center "
              to={'classroom/create'}>
            <span className=" text-2xl ">
              <MdOutlineAddCircleOutline/>
            </span>
          Classroom
        </Link>
      </div>
    </div>
  )
}
