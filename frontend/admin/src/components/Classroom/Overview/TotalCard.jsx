import {IoPeople} from "react-icons/io5"

export const TotalCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex items-center gap-3  min-w-56">
      <span className="text-2xl p-2 rounded-lg bg-primary text-white"><IoPeople/></span>
      <div className="">
        <h2 className="text-sm font-medium text-font-100 ">Total Students</h2>
        <p className="text-lg font-medium text-font-300">36 Students</p>
      </div>
    </div>
  )
}
