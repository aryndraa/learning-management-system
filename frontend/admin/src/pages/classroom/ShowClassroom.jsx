import {PageTitle} from "../../components/PageTitle.jsx";
import {MeetingInformation} from "../../components/Classroom/Overview/MeetingInformation.jsx";
import { DetailOverview } from "../../components/Classroom/overview/DetailOverview.jsx";
import { TotalCard } from "../../components/Classroom/Overview/TotalCard.jsx";

export function ShowClassroom() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Class A15" />
        <DetailOverview/>
        <div className="grid grid-cols-2 gap-3">
          <TotalCard/>
          <TotalCard/>
        </div>
        <MeetingInformation/>
      </section>
    </>
  )
}