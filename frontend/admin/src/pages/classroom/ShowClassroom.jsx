import { DetailOverview } from "../../components/Classroom/overview/DetailOverview.jsx";
import {PageTitle} from "../../components/PageTitle.jsx";

export function ShowClassroom() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <DetailOverview/>
      </section>
    </>
  )
}