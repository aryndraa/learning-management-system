import {PageTitle} from "../../components/PageTitle.jsx";
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import classroom from "../../api/classroom.js";


export function ShowClassroom() {
  const {classroom : classroomId} = useParams();
  const [classroomData, setClassroomData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  console.log(classroomId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await classroom.getClassroomById(classroomId)
        setClassroomData(response.classroom);
        setLoading(false);
      } catch (err) {
        setError(err);
        console.log(err)
        throw err
      } finally {
        setLoading(false);
      }
    }

    fetchData()
  }, [classroomId])

  console.log(classroomData);

  return (
    <>
      <PageTitle title="Classroom Management" />

    </>
  )
}