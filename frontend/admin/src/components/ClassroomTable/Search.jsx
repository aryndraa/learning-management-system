import { IoSearchSharp } from "react-icons/io5";
import {useClassroom} from "../../contexts/ClassroomContext.jsx";

export const Search = () => {
const {search, setSearch} = useClassroom()
  return (
    <>
      <form action="" method="get" className="flex w-full gap-3">
        <input
          type="text"
          placeholder="Search Classrooms"
          className=" py-3 px-4 rounded-lg w-full bg-background focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="text-2xl flex items-center justify-center px-3 rounded-lg bg-primary text-white"
          onClick={(e) => {
            e.preventDefault()
          }}
        >
          <IoSearchSharp/>
        </button>
      </form>
    </>
  )
}