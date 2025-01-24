import PropTypes from "prop-types";
import { MdClass } from "react-icons/md";
import {FaChalkboardTeacher} from "react-icons/fa";
import {IoPeople} from "react-icons/io5";

const OnlineCard = ({type = "primary", index, items}) => {
  const colors = {
    primary: "from-primary/90 to-primary/60",
    secondary: "from-violet-500 to-violet-400 ",
    trinary: "from-blue-400 to-blue-300",
  };

  const icons = {
    primary: <MdClass/> ,
    secondary: <FaChalkboardTeacher/>,
    trinary: <IoPeople/>,
  }


  return (
    <div className={`flex flex-col bg-gradient-to-r ${colors[type]} p-3 rounded-lg w-full ${ index === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
        <div className="text-2xl  bg-white/40 p-3 rounded-full text-white w-fit self-end">
          {icons[type]}
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl  font-medium text-white mb-2">{items.total}</h3>
          <p className="text-sm md:text-lg text-white/80 font-medium capitalize">Online {items.name}</p>
        </div>
    </div>
  )
}

OnlineCard.propTypes = {
  type : PropTypes.string,
  index : PropTypes.number,
  items : PropTypes.object,
}

export default OnlineCard