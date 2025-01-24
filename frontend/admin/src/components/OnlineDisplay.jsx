import summaryData from "../dummy/onlineData.json"
import OnlineCard from "./OnlineCard.jsx";

export  const OnlineDisplay = () => {

  const data   = summaryData;
  const types = ['primary', 'secondary', 'trinary']

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 p-4 bg-white rounded-lg">
        {
          data.map((item, index) => (
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