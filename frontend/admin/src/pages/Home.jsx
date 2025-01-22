import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";
import {ListActivities} from "../components/ListActivities.jsx";
import {CountItem} from "../components/CountItem.jsx";

export default function Home () {
  return (
    <>
      <section>
        <PageTitle title="Dashboard" />
        <div className="mb-4">
          <OnlineDisplay />
        </div>
        <div className="flex overflow-x-scroll gap-4 mb-4 ">
          <CountItem/>
          <CountItem/>
          <CountItem/>
        </div>
        <div>
          <ListActivities/>
        </div>

      </section>
    </>
  )
}
