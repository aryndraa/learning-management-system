export const TableAbsentItem = () => {
  return (
    <tr className="">
      <td>1</td>
      <td>Ryan Manggala</td>
      <td>12</td>
      <td>
        <span className="text-sm px-4 py-2 bg-danger/10 rounded-lg text-danger font-medium">
          Absent
        </span>
      </td>
      <td>
        <button className="text-sm px-4 py-2 bg-primary text-white font-medium rounded-lg">Reason</button>
      </td>
    </tr>
  )
}
