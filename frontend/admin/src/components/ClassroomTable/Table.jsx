import { Link } from "react-router-dom"

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
                    <th className="font-medium text-sm rounded-tr-lg"></th>
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