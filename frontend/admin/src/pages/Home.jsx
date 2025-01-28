import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";
import {ListActivities} from "../components/ListActivities.jsx";
import {ListCountItems} from "../components/ListCountItems.jsx";
import {ProfileCard} from "../components/ProfileCard.jsx";

export default function Home () {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Dashboard" />
        <div className="lg:flex flex-row-reverse gap-4">
          <div className="flex-1 lg:max-w-[28%] mb-4">
            <ProfileCard/>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <OnlineDisplay />
            </div>
            <div>
              <ListCountItems />
            </div>
            <div>
              <ListActivities/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
