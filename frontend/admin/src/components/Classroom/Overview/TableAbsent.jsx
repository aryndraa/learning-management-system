import { TableAbsentItem } from "./TableAbsentItem"

export const TableAbsent = () => {
  return (
    <div>
      <table className="table bg-white rounded-lg ">
        <tr className="text-font-100 ">
          <th className="font-medium hidden lg:block">#</th>
          <th className="font-medium hidden lg:block">Name</th>
          <th className="font-medium ">Number</th>
          <th className="font-medium ">Attendance</th>
          <th className="font-medium "></th>
        </tr>
        <TableAbsentItem/>
        <TableAbsentItem/>
      </table>
    </div>
  )
}
