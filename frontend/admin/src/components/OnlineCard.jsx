import PropTypes from "prop-types";
import { MdClass } from "react-icons/md";

const OnlineCard = ({color = "primary", index, items}) => {
  const colors = {
    primary: "from-primary/90 to-primary/60",
    secondary: "from-violet-500 to-violet-400 ",
    trinary: "from-blue-400 to-blue-300",
  };

  console.log(index);

  return (
    <div className={`flex flex-col bg-gradient-to-r ${colors[color]} py-3 px-4 rounded-lg w-full ${ index === 2 ? 'col-span-2' : ''}`}>
        <div className="text-2xl bg-white/40 p-3 rounded-full text-white w-fit self-end">
          <MdClass/>
        </div>
        <div>
          <h3 className="text-3xl mb-1 font-medium text-white">{items.total}</h3>
          <p className="text-sm text-white font-medium">Online {items.name}</p>
        </div>
    </div>
  )
}

OnlineCard.propTypes = {
  color : PropTypes.string,
  index : PropTypes.number,
  items : PropTypes.array,
}

export default OnlineCard