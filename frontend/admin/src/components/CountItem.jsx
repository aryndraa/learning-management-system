import { MdOutlineLibraryBooks } from "react-icons/md";

export const CountItem = () => {
  return (
    <div className="py-3 px-5 bg-white min-w-56 rounded-lg flex items-center gap-4">
      <span className="p-3 bg-primary/80 rounded-full text-white text-2xl">
        <MdOutlineLibraryBooks />
      </span>
      <div>
        <p className="text-2xl font-medium text-font-300 ">20</p>
        <h2 className="text-sm text-font-100">Today Materials</h2>
      </div>
    </div>
  )
}