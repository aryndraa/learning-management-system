import summaryData from "./../dummy/summaryData.json"
import OnlineCard from "./OnlineCard.jsx";

export  const OnlineDisplay = () => {

  const data   = summaryData;
  const colors = ['primary', 'secondary', 'trinary']

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
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