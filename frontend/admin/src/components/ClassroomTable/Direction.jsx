import {PiSortAscendingBold, PiSortDescendingBold} from "react-icons/pi";
import {useClassroom} from "../../contexts/ClassroomContext.jsx";

export const Direction = () => {
  const {direction, setDirection} = useClassroom();

  const handleToggle = () => {
    if (direction === "asc") {
      return (
        <button className="p-3 text-xl bg-neutral-100 rounded-lg text-font-100 flex gap-2 items-center font-medium">
          <PiSortAscendingBold/>
        </button>
      )
    } else if (direction === "desc") {
      return (
        <button className="p-3 text-xl bg-neutral-100 rounded-lg text-font-100 flex gap-2 items-center font-medium">
          <PiSortDescendingBold/>
        </button>
      )
    }
  }

  console.log(direction);
  return (
    <>
      {handleToggle()}
    </>
  )
}