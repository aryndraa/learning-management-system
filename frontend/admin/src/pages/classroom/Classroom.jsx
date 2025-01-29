import {PageTitle} from "../../components/PageTitle.jsx";
import {Item} from "../../components/ClassroomTable/Item.jsx";
import {Search} from "../../components/ClassroomTable/Search.jsx";
import {Filter} from "../../components/ClassroomTable/Filter.jsx";
import {CheckStatus } from "../../components/ClassroomTable/CheckStatus.jsx";
import {ClassroomProvider} from "../../contexts/ClassroomContext.jsx";

export default function Classroom () {

  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <div>
          <ClassroomProvider>
            <div className="mb-4 bg-white rounded-lg p-4 flex flex-col gap-4">
              <Search/>
              <div className="flex justify-between items-center" >
                <div>
                  <CheckStatus/>
                </div>
                <Filter/>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 w-full bg-white p-4">
              <Item/>
              <Item/>
              <Item/>
            </div>
          </ClassroomProvider>
        </div>
      </section>
    </>
  )
}
