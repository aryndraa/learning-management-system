import {ActivityItem} from "./ActivityItem";
import activityData from "./../dummy/activityData.json"
import {timeAgo} from './../utils/date.js'
import {useState} from "react";

export const ListActivities = () => {

  const data = activityData;

  const [listCount, setListCount] = useState(2);

  const handleShowAll = () => {
    setListCount(data.lenght);
  }

  const handleShowLess = () => {
    setListCount(2)
  }

  return (
    <>
      <div className="bg-white p-4 md:p-5 rounded-lg">
        <h2 className="text-font-100 font-medium text-lg mb-2 lg:mb-1 ">Today Activity</h2>
        <div>
          {data.slice(0, listCount).map((activity, index) => (
            <ActivityItem
              key={index}
              name={activity.name}
              avatar={activity.avatar}
              activity={activity.activity}
              created_at={timeAgo(activity.created_at)}
            />
          ))}
          <div className="pt-4 md:pt-6 font-medium text-sm text-font-100 text-center">
            {
              listCount < data.length ?
                <button onClick={handleShowAll}>
                  Show All
                </button>
                :
                <button onClick={handleShowLess}>Show Less</button>
            }
          </div>
        </div>
      </div>
    </>
  )
}