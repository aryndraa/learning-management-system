import { FaFilter } from "react-icons/fa";
import {useState} from "react";

export const Filter = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-3 bg-background rounded-lg text-font-100"
        onClick={() => setOpenModal(!openModal)}
      >
        <FaFilter />
      </button>
      <div className={`absolute  flex-col bg-white w-32 items-start rounded-lg shadow-md right-0 top-14 ${
        openModal ? "flex" : "hidden"
      }`}>
        <div>
          <button
            className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm "
          >
            Class
          </button>
          <button
            className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm "
          >
            Number
          </button>
          <button
            className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm "
          >
            Student
          </button>
        </div>
      </div>
    </div>
  )
}