import {CountItem} from "./CountItem.jsx";
import countItem from "../dummy/countItem.json";

export const ListCountItems = () => {

  const data = countItem;
  const types = ['primary', 'secondary', 'trinary']

  return (
    <div className="flex md:grid md:grid-cols-3 overflow-x-scroll md:overflow-x-hidden gap-4 scrollbar-hide">
      {
        data.map((item, index) => (
          <CountItem
            key={index}
            count={item.count}
            name={item.name}
            type={types[index]}
          />
        ))
      }
    </div>
  )
}