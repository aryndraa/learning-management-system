import OnlineCard from "./OnlineCard.jsx";
import { useTodaySummary } from "../hooks/useTodaySummary.jsx";

export  const OnlineDisplay = () => {

  const { data, isLoading, error } = useTodaySummary();

  if (isLoading) return <p>Loading...</p>;
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
            />
          ))
        }
      </div>
    </>
  )
}