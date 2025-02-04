import {PageTitle} from "../../components/PageTitle.jsx";
import {useParams} from "react-router";

export function ShowClassroom() {
  const {classroom} = useParams();
  console.log(classroom);

  return (
    <>
      <PageTitle title="Classroom Management" />

    </>
  )
}