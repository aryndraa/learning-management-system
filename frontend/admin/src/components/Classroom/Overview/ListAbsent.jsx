import { ListAbsentItem } from "./ListAbsentItem"

export const ListAbsent = () => {
  return (
    <div className="bg-white rounded-lg p-4 ">
      <h2 className="font-medium text-font-100 mb-4">Today Attendance</h2>
      <div className="flex flex-col">
        <ListAbsentItem/>
        <ListAbsentItem/>
        <ListAbsentItem/>
      </div>
    </div>
  )
}
