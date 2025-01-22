import {ActivityItem} from "./ActivityItem";
import activityData from "./../dummy/activityData.json"
import {timeAgo} from './../utils/date.js'

export const ListActivities = () => {

  const data = activityData;

  return (
    <>
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-font-100 font-medium text-lg mb-2 ">Today Activity</h2>
        <div>
          {data.map((activity, index) => (
            <ActivityItem
              key={index}
              name={activity.name}
              avatar={activity.avatar}
              activity={activity.activity}
              created_at={timeAgo(activity.created_at)}
            />
          ))}

        </div>
      </div>
    </>
  )
}