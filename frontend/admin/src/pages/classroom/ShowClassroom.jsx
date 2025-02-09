import {PageTitle} from "../../components/PageTitle.jsx";
import {MeetingInformation} from "../../components/Classroom/Overview/MeetingInformation.jsx";
import { DetailOverview } from "../../components/Classroom/overview/DetailOverview.jsx";
import { TotalCard } from "../../components/Classroom/Overview/TotalCard.jsx";
import { TabBar } from "../../components/TabBar.jsx";
import { TableAbsent } from "../../components/Classroom/Overview/TableAbsent.jsx";
import { ListAbsent } from "../../components/Classroom/Overview/ListAbsent.jsx";

export function ShowClassroom() {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Class A15" />
        <div className="grid grid-cols-1 gap-4">
          <TabBar/>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="min-w-[70%] flex flex-col gap-4">
              <DetailOverview/>
              <div className="w-full block lg:hidden">
                <MeetingInformation/>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <TotalCard/>
                <TotalCard/>
              </div>
              <div>
                <div className="hidden lg:block">
                  <TableAbsent/>
                </div>
                <div className="block lg:hidden">
                  <ListAbsent/>
                </div>
              </div>
            </div>
            <div className="w-full hidden lg:block">
              <MeetingInformation/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}