import {PageTitle} from "../../components/PageTitle.jsx";
import {Item} from "../../components/ClassroomTable/Item.jsx";
import {Search} from "../../components/ClassroomTable/Search.jsx";

export default function Classroom () {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <div>
          <div className="mb-4 bg-white rounded-lg p-4">
            <Search/>
          </div>
          <div className="grid grid-cols-1 gap-4 w-full bg-white p-4">
            <Item/>
            <Item/>
            <Item/>
          </div>
        </div>
      </section>
    </>
  )
}
