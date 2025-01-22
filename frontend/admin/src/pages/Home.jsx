import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";
import {ActivityItem} from "../components/ActivityItem.jsx";

export default function Home () {
  return (
    <>
      <section>
        <PageTitle title="Dashboard" />
        <div className="mb-4">
          <OnlineDisplay />
        </div>
        <div className="bg-white px-4 py-4 rounded-lg">
          <h2 className="text-font-100 font-medium text-lg mb-2 ">Today Activity</h2>
          <ActivityItem/>
          <ActivityItem/>
          <ActivityItem/>
          <ActivityItem/>
        </div>
      </section>
    </>
  )
}
