import {PageTitle} from "../../components/PageTitle.jsx";
import {Item} from "../../components/ClassroomTable/Item.jsx";
import {Search} from "../../components/ClassroomTable/Search.jsx";
import {Filter} from "../../components/ClassroomTable/Filter.jsx";
import {CheckStatus } from "../../components/ClassroomTable/CheckStatus.jsx";
import {ClassroomProvider} from "../../contexts/ClassroomContext.jsx";
import {Link} from "react-router";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import {Direction} from "../../components/ClassroomTable/Direction.jsx";
import Table from "../../components/ClassroomTable/Table.jsx";

export default function Classroom () {

  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <div>
          <ClassroomProvider>
            <div className="mb-4 bg-white rounded-lg p-4 flex flex-col gap-4">
              <div>
                <Search/>
              </div>
              <div className="flex  items-stretch justify-between gap-4" >
                <CheckStatus/>
                <div className="flex gap-2">
                  <Filter/>
                  <Direction/>
                </div>
              </div>
            </div>

            <div className="mb-4 flex justify-between items-center bg-white p-4 rounded-lg">
              <span className="text-lg font-medium text-font-200">200 Items</span>
              <Link className="py-2 px-3 w-fit bg-primary font-medium text-white rounded-lg flex gap-1 items-center " to={'classroom/create'}>
                    <span className=" text-2xl ">
                      <MdOutlineAddCircleOutline/>
                    </span>
                Classroom
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 w-full bg-white p-4 lg:hidden">
              <Item/>
              <Item/>
              <Item/>
            </div>
            <div className="hidden lg:block">
              <Table/>
            </div>
          </ClassroomProvider>
        </div>
      </section>
    </>
  )
}
