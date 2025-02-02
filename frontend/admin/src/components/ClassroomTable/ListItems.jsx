import {Item} from "./Item.jsx";
import PropTypes from "prop-types";
import {Pagination} from "./Pagination.jsx";

export const ListItems = ({data, loading}) => {
  console.log(data[0])
  return (
    <div className="flex flex-col bg-white rounded-lg w-full  p-4 ">
      {
        loading && data ?
          <div className="flex flex-col gap-4">
            <div className="w-full h-[236px] bg-neutral-100 flex flex-col justify-end p-4 rounded-lg">
              <div className="w-full bg-neutral-200 h-14 rounded-lg"></div>
            </div>
            <div className="w-full h-[236px] bg-neutral-100 flex flex-col justify-end p-4 rounded-lg">
              <div className="w-full bg-neutral-200 h-14 rounded-lg"></div>
            </div>
            <div className="w-full h-[236px] bg-neutral-100 flex flex-col justify-end p-4 rounded-lg">
              <div className="w-full bg-neutral-200 h-14 rounded-lg"></div>
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
