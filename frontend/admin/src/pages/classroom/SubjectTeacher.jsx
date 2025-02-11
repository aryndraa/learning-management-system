import {PageTitle} from "../../components/PageTitle.jsx";
import { TabBar } from "../../components/TabBar.jsx";

export const SubjectTeacher = () => {
  const links = [
    {
      path: '',
      name: "Overview"
    },
    {
      path: 'students',
      name: "Students"
    },
    {
      path: 'subject-teachers',
      name: "Subject Teachers"
    },
    {
      path: 'journals',
      name: "All Journals"
    },

  ]

  return (
    <>
      <section className="grid grid-cols-1 gap-4 w-full ">
        <PageTitle title="Class A15" />
        <div className="grid grid-cols-1 gap-4">
          <TabBar links={links}/>
        </div>
      </section>
    </>
  )
}
