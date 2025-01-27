import {CountItem} from "./CountItem.jsx";
import { useTodaySummary } from "../hooks/useTodaySummary.jsx";

export const ListCountItems = () => {

  const { data, isLoading, error } = useTodaySummary();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countItems = data.data.filter((item) =>
    ["meetings", "materials", "assigments"].includes(item.name)
  );

  const types = ['primary', 'secondary', 'trinary']

  return (
    <div className="flex md:grid md:grid-cols-3 overflow-x-scroll md:overflow-x-hidden gap-4  scrollbar-hide">
      {
        countItems.map((item, index) => (
          <CountItem
            key={index}
            total={item.total}
            name={item.name}
            type={types[index]}
          />
        ))
      }
    </div>
  )
}