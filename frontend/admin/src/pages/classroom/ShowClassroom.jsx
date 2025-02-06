import {PageTitle} from "../../components/PageTitle.jsx";
import {MeetingInformation} from "../../components/Classroom/Overview/MeetingInformation.jsx";
import { DetailOverview } from "../../components/Classroom/overview/DetailOverview.jsx";

export function ShowClassroom() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <DetailOverview/>
        <MeetingInformation/>
      </section>
    </>
  )
}