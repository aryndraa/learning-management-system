import {ActivityItem} from "./ActivityItem";
import activityData from "./../dummy/activityData.json"
import {timeAgo} from './../utils/date.js'
import {useEffect, useState} from "react";
import summary from "../api/summary.js";
import {SkeletonBox} from "./SkeletonBox.jsx";

export const ListActivities = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await summary.getDailyActivities();

        setData(response.data);
      } catch (err) {
        setError(err);
        console.error("Error fetching summary data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  const [listCount, setListCount] = useState(2);

  if(isLoading) {
    return (
      <div className="bg-white p-4 md:p-5 rounded-lg">
        <h2 className="text-font-100 font-medium text-lg mb-2 lg:mb-1 ">Today Activity</h2>
        <div>
          <SkeletonBox width={"100%"} height={"5rem"} support={"my-5"}/>
          <SkeletonBox width={"100%"} height={"5rem"} support={"my-5"}/>
        </div>
      </div>
    )
  }

  console.log(data[0]);


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
              name={activity.user.full_name ?? "?"}
              avatar={activity.user.avatar}
              activity={activity.description}
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