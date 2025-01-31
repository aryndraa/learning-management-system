import { Link } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";

const Table = () => {
  return (
    <>
        <table className="table  rounded-lg bg-white">
            <thead>
                <tr className="text-white bg-primary rounded-lg  border-transparent">
                    <th className="font-medium text-sm rounded-tl-lg">#</th>
                    <th className="font-medium text-sm">Class</th>
                    <th className="font-medium text-sm">Major</th>
                    <th className="font-medium text-sm">Number</th>
                    <th className="font-medium text-sm">Teacher</th>
                    <th className="font-medium text-sm">Student</th>
                    <th className="font-medium text-sm rounded-tr-lg">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-transparent border-y border-y-border/30 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium bg-primary/50 rounded-lg justify-center py-3 px-4 w-fit text-white">
                          Overview
                          <span><FaChevronRight/></span>
                        </Link>
                      </div>
                    </td>
                </tr>
                <tr className="border-transparent border-y border-y-border/30 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium bg-primary/50 rounded-lg justify-center py-3 px-4 w-fit text-white">
                          Overview
                          <span><FaChevronRight/></span>
                        </Link>
                      </div>
                    </td>
                </tr>
                <tr className="border-transparent border-y border-y-border/30 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium bg-primary/50 rounded-lg justify-center py-3 px-4 w-fit text-white">
                          Overview
                          <span><FaChevronRight/></span>
                        </Link>
                      </div>
                    </td>
                </tr>
                <tr className="border-transparent border-y border-y-border/30 hover:bg-primary/5 transition text-font-300 text-base ">
                    <td>1</td>
                    <td>A15</td>
                    <td>Web Development</td>
                    <td>11</td>
                    <td>Mr Budhi</td>
                    <td>3</td>
                    <td>
                      <div>
                        <Link to={`/classroom/1}`} className="flex items-center gap-2 font-medium bg-primary/50 rounded-lg justify-center py-3 px-4 w-fit text-white">
                          Overview
                          <span><FaChevronRight/></span>
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