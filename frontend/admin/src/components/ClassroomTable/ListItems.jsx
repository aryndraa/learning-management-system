import {Item} from "../../components/ClassroomTable/Item.jsx";
import PropTypes from "prop-types";

export const ListItems = ({data}) => {
  console.log(data)
  return (
    <div className="grid grid-cols-1 gap-4 w-full bg-white p-4">
      <Item/>
    </div>
  )
}

ListItems.propTypes = {
  data: PropTypes.array.isRequired
}
