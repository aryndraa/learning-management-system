export const TableAbsentItem = () => {



  return (
    <tr className="text-base">
      <td className="hidden lg:block">1</td>
      <td className="hidden lg:block">Ryan Manggala</td>
      <td className="">12</td>
      <td className="">
        <span className="text-sm px-4 py-2 bg-danger/10 rounded-lg text-danger font-medium">
          Absent
        </span>
      </td>
      <td>
        <button className="text-sm px-5 py-2 bg-primary text-white font-medium rounded-lg">Reason</button>
      </td>
    </tr>
  )
}
