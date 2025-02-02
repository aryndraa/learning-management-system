import { Link } from "react-router-dom"

const TableItem = () => {
  return (
    <tr className="border-transparent border-y border-y-border/40 hover:bg-primary/5 transition text-font-300 text-base ">
      <td>1</td>
      <td>A15</td>
      <td>Web Development</td>
      <td>11</td>
      <td className="group">
        <Link 
          to={"classroom/:classroom"}
          className="bg-primary/10 hover:bg-primary/20 text-sm transition ease-in-out duration-300 rounded-lg text-primary font-medium px-3 py-2 "
        >
          Mr Budhi
        </Link>
        <div className="absolute bg-white px-3 py-3 rounded-lg w-64 hidden mt-3 group-hover:flex items-center gap-2 shadow">
          <div className="w-10 max-h-10 ">
            <img 
              src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg" 
              alt=""
              className="w-full h-10 object-cover rounded-full" 
            />
          </div>
          <div>
            <h3 className="text-sm font-medium text-font-300 mb-1">Wayan Slebew</h3>
            <p className="text-xs font-medium text-font-100">Code : 001</p>
          </div>
        </div>
      </td>
      <td>3</td>
      <td>
        <div>
          <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium border border-primary transition ease-in-out duration-300 rounded-lg justify-center py-2 px-3 text-sm w-fit text-primary hover:text-white hover:bg-primary ">
            Overview
          </Link>
        </div>
      </td>
    </tr>
  )
}

export default TableItem