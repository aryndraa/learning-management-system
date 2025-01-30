import {CountItem} from "./CountItem.jsx";
import { useDailySummary } from "../hooks/useDailySummary.jsx";
import {SkeletonBox} from "./SkeletonBox.jsx";

export const ListCountItems = () => {

  const { data, isLoading, error } = useDailySummary();

  if (isLoading) {
    return (
      <div className="flex md:grid md:grid-cols-3 overflow-x-scroll md:overflow-x-hidden gap-4  scrollbar-hide">
        <SkeletonBox
          height={"5.3rem"}
          width={"100%"}
        />
        <SkeletonBox
          height={"5.3rem"}
          width={"100%"}
        />
        <SkeletonBox
          height={"5.3rem"}
          width={"100%"}
        />
      </div>
    )
  }
  if (error) return <p>Error: {error.message}</p>;

  const countItems = data.data.filter((item) =>
    ["meetings", "materials", "assignments"].includes(item.name)
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