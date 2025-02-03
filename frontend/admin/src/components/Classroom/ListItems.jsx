import {Item} from "./Item.jsx";
import PropTypes from "prop-types";

export const ListItems = ({data, loading}) => {
  console.log(data[0])
  return (
    <div className="flex flex-col bg-white rounded-lg w-full  p-4 ">
      {
        loading && data ?
          <div className="flex flex-col gap-4">
            <div className="w-full h-[236px] bg-neutral-100 flex flex-col justify-end p-4 rounded-lg">
              <div className="flex gap-2">
                <div className="w-[70%] bg-neutral-200 h-14 rounded-lg"></div>
                <div className="w-[30%] bg-neutral-200 h-14 rounded-lg"></div>
              </div>
            </div>
            <div className="w-full h-[236px] bg-neutral-100 flex flex-col justify-end p-4 rounded-lg">
              <div className="flex gap-2">
                <div className="w-[70%] bg-neutral-200 h-14 rounded-lg"></div>
                <div className="w-[30%] bg-neutral-200 h-14 rounded-lg"></div>
              </div>
            </div>
            <div className="w-full h-[236px] bg-neutral-100 flex flex-col justify-end p-4 rounded-lg">
              <div className="flex gap-2">
                <div className="w-[70%] bg-neutral-200 h-14 rounded-lg"></div>
                <div className="w-[30%] bg-neutral-200 h-14 rounded-lg"></div>
              </div>
            </div>
          </div>
          :
          <>
            {data.map((item, index) => (
              <Item
                key={index}
                classroom={item.classroom}
                major={item.major}
                number={item.number}
                teacher={item.teacher.name}
                students_count={item.students_count}
                id={item.id}
              />
            ))}
          </>
      }
    </div>
  )
}

ListItems.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
