import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";
import {ListActivities} from "../components/ListActivities.jsx";
import {ListCountItems} from "../components/ListCountItems.jsx";
import {ProfileCard} from "../components/ProfileCard.jsx";

export default function Home () {
  return (
    <>
      <section className="grid  grid-cols-1 gap-4 w-full ">
        <PageTitle title="Dashboard" />
        <div>
          <ProfileCard/>
        </div>
        <div>
          <OnlineDisplay />
        </div>
        <div>
          <ListCountItems />
        </div>
        <div>
          <ListActivities/>
        </div>
      </section>
    </>
  )
}
