import OnlineCard from "./OnlineCard.jsx";
import { useDailySummary } from "../hooks/useDailySummary.jsx";
import {SkeletonBox} from "./SkeletonBox.jsx";

export  const OnlineDisplay = () => {

  const { data, isLoading, error } = useDailySummary();

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 p-4 bg-white rounded-lg">
        <SkeletonBox
          height={"8.5rem"}
          width={"100%"}
        />
        <SkeletonBox
          height={"8.5rem"}
          width={"100%"}
        />
        <SkeletonBox
          height={"8.5rem"}
          width={"100%"}
          support={"col-span-2 md:col-span-1"}
        />
      </div>
    )
  }

  if (error) return <p>Error: {error.message}</p>;


  const todayData = data.data.filter((item) =>
    ["teachers", "students", "classrooms"].includes(item.name)
  );

  const types = ['primary', 'secondary', 'trinary']

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 p-4 bg-white rounded-lg">
        {
          todayData.map((item, index) => (
            <OnlineCard
              key={index}
              type={types[index]}
              index={index}
              items={item}
              loading={isLoading}
            />
          ))
        }
      </div>
    </>
  )
}