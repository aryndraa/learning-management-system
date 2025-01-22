import { MdOutlineLibraryBooks } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import PropTypes from "prop-types";

export const CountItem = ({name, count, type = "primary"}) => {

  const icons = {
    primary: <MdOutlineOndemandVideo/>,
    secondary: <MdOutlineLibraryBooks/>,
    trinary: <FaTasks/>
  }

  const colors = {
    primary: "bg-violet-300",
    secondary: "bg-primary/50  ",
    trinary: "bg-blue-300",
  }

  return (
    <div className="py-3 px-5 bg-white min-w-56 rounded-lg flex items-center gap-4">
      <span className={`p-3 rounded-full text-white text-2xl ${colors[type]}`}>
        {icons[type]}
      </span>
      <div>
        <p className="text-2xl font-medium text-font-300 ">{count}</p>
        <h2 className="text-sm text-font-100 capitalize">{name}</h2>
      </div>
    </div>
  )
}

CountItem.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
  type: PropTypes.string,
}