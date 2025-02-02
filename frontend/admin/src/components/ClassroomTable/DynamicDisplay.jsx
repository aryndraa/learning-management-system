import {Table} from "../../components/ClassroomTable/Table.jsx";
import classroom from "../../api/classroom.js";
import { useState, useEffect } from "react";
import { useClassroom } from "../../contexts/ClassroomContext.jsx";
import { ListItems } from "./ListItems.jsx";

export const DynamicDisplay = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {status, search, direction, orderBy} = useClassroom();

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await classroom.getAllClassrooms({
          keywords: search,
          order_by: orderBy,
          order_direction: direction,
          status: status
        });
        setClassrooms(response.data);
      } catch (err) {
        setError(err.message);
        throw err
      } finally {
        setLoading(false);
      }
    };

    fetchClassrooms();
  }, [search, orderBy, direction, status])


  return (
    <>
      <div className="block lg:hidden">
        <ListItems data={classrooms} loading={loading}/>
      </div>
      <div className="hidden lg:block">
        <Table/>
      </div>
    </>
  )
}

