import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";
import {ListActivities} from "../components/ListActivities.jsx";

export default function Home () {
  return (
    <>
      <section>
        <PageTitle title="Dashboard" />
        <div className="mb-4">
          <OnlineDisplay />
        </div>
        <div>
          <ListActivities/>
        </div>

      </section>
    </>
  )
}
