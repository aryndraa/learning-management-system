import {useState} from "react";
import { FiFilter } from "react-icons/fi";
import {useClassroom} from "../../contexts/ClassroomContext.jsx";

export const Filter = () => {
  const [openModal, setOpenModal] = useState(false);

  const {orderBy, setOrderBy} = useClassroom()

  const handleOrderBy = (orderBy) => {
    setOrderBy(orderBy);
    setOpenModal(false)
  }

  return (
    <div className="relative">
      <button
        className="p-3 bg-neutral-100 rounded-lg text-font-100 flex text-sm gap-2 items-center font-medium "
        onClick={() => setOpenModal(!openModal)}
      >
        <span className="text-lg">
          <FiFilter />
        </span>
        Filter
      </button>
      <div className={`absolute  flex-col bg-white w-32 items-start rounded-lg shadow-md right-0 top-14 ${
        openModal ? "flex" : "hidden"
      }`}>
        <div>
          <button
            onClick={() => handleOrderBy('name')}
            className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm "
          >
            Class
          </button>
          <button
            onClick={() => handleOrderBy('number')}
            className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm "
          >
            Number
          </button>
          <button
            onClick={() => handleOrderBy('student')}
            className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm "
          >
            Student
          </button>
        </div>
      </div>
    </div>
  )
}