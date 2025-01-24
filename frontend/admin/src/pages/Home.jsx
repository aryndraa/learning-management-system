import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";
import {ListActivities} from "../components/ListActivities.jsx";
import {ListCountItems} from "../components/ListCountItems.jsx";
import {ProfileCard} from "../components/ProfileCard.jsx";

export default function Home () {
  return (
    <>
      <section>
        <PageTitle title="Dashboard" />
        <div className="mb-4">
          <ProfileCard/>
        </div>
        <div className="mb-4">
          <OnlineDisplay />
        </div>
        <div className="mb-4">
          <ListCountItems />
        </div>
        <div>
          <ListActivities/>
        </div>
      </section>
    </>
  )
}
