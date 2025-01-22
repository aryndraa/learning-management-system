import {CountItem} from "./CountItem.jsx";
import countItem from "../dummy/countItem.json";

export const ListCountItems = () => {

  const data = countItem;
  const types = ['primary', 'secondary', 'trinary']

  return (
    <div className="flex overflow-x-scroll gap-4 mb-4 ">
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