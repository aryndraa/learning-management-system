import summaryData from "../dummy/onlineData.json"
import OnlineCard from "./OnlineCard.jsx";

export  const OnlineDisplay = () => {

  const data   = summaryData;
  const colors = ['primary', 'secondary', 'trinary']

  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-4 bg-white rounded-lg">
        {
          data.map((item, index) => (
            <OnlineCard
              key={index}
              color={colors[index]}
              index={index}
              items={item}
            />
          ))
        }
      </div>
    </>
  )
}