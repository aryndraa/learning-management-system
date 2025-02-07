import { Link } from "react-router-dom"
import { GoKebabHorizontal } from "react-icons/go"

export const TabBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <div>
        <h2 className="text-xl font-medium text-font-300">Overview</h2>
      </div>
      <div className="flex">
        <button className="text-2xl"><GoKebabHorizontal/></button>
        <div className="hidden">
          <Link to={'/'} className="text-sm">Overview</Link>
          <Link to={'/'} className="text-sm">Subject Teachers</Link>
          <Link to={'/'} className="text-sm">List Students</Link>
        </div>
      </div>
    </div>
  )
}
