import { DetailOverview } from "../../components/Classroom/Overview/DetailOverview.jsx";
import {PageTitle} from "../../components/PageTitle.jsx";
import {MeetingInformation} from "../../components/Classroom/Overview/MeetingInformation.jsx";

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