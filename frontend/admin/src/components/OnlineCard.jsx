import PropTypes from "prop-types";
import { MdClass } from "react-icons/md";

const OnlineCard = ({color = "primary"}) => {
  const colors = {
    primary: "from-primary/80 to-primary/60",
    secondary: "from-red-500/80 to-red-500/40",
  };

  return (
    <div className={`flex flex-col bg-gradient-to-r ${colors[color]} py-3 px-4 rounded-lg w-full`}>
        <div className="text-2xl bg-white/40 p-3 rounded-full text-white w-fit self-end">
          <MdClass/>
        </div>
        <div>
          <h3 className="text-2xl mb-1 font-medium text-white">5.120</h3>
          <p className="text-sm text-white font-medium">Active Classrooms</p>
        </div>
    </div>
  )
}

OnlineCard.propTypes = {
  color : PropTypes.string
}

export default OnlineCard