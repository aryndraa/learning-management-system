import {PageTitle} from "../../components/PageTitle.jsx";
import {Item} from "../../components/ClassroomTable/Item.jsx";

export default function Classroom () {
  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Classroom Management" />
        <div className="grid grid-cols-1 gap-4 w-full bg-white p-4">
          <Item/>
          <Item/>
          <Item/>
        </div>
      </section>
    </>
  )
}
