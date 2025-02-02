import {PageTitle} from "../../components/PageTitle.jsx";
import {ClassroomProvider} from "../../contexts/ClassroomContext.jsx";
import { DynamicDisplay } from "../../components/ClassroomTable/DynamicDisplay.jsx";
import { Toolbar } from "../../components/ClassroomTable/Toolbar.jsx";

export default function Classroom () {


  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <div>
          <ClassroomProvider>
            <Toolbar/>
            <DynamicDisplay/>
          </ClassroomProvider>
        </div>
      </section>
    </>
  )
}
