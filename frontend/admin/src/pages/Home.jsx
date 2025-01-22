import {OnlineDisplay} from "../components/OnlineDisplay.jsx";
import {PageTitle} from "../components/PageTitle.jsx";

export default function Home () {
  return (
    <>
      <section>
        <PageTitle title="Dashboard" />
        <div>
          <OnlineDisplay />
        </div>
      </section>
    </>
  )
}
