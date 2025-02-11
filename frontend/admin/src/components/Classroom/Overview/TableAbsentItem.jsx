export const TableAbsentItem = () => {



  return (
    <tr className="text-base">
      <td>1</td>
      <td>Ryan Manggala</td>
      <td>12</td>
      <td>
        {/* <span className="text-sm px-4 py-2 bg-danger/10 rounded-lg text-danger font-medium">
          Absent 
        </span> */}
        <span className="text-sm px-4 py-2 bg-primary/10 rounded-lg text-primary font-medium">
          Present 
        </span>
      </td>
      <td>
        <button className="text-sm px-5 py-2 bg-primary text-white font-medium rounded-lg">Reason</button>
      </td>
    </tr>
  )
}
