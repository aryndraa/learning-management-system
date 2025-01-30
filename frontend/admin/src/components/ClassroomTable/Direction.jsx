import {PiSortAscendingBold, PiSortDescendingBold} from "react-icons/pi";
import {useClassroom} from "../../contexts/ClassroomContext.jsx";

export const Direction = () => {
  const {direction, setDirection} = useClassroom();
  return (
    <>
      <button className="p-3 text-xl bg-neutral-100 rounded-lg text-font-100 flex gap-2 items-center font-medium">
        {
          direction === "asc" ? (
            <PiSortAscendingBold/>
          ) : (
            <PiSortDescendingBold/>
          )
        }
      </button>
    </>
  )
}