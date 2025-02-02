import {Table} from "./Table.jsx";
import classroom from "../../api/classroom.js";
import { useState, useEffect } from "react";
import { useClassroom } from "../../contexts/ClassroomContext.jsx";
import { ListItems } from "./ListItems.jsx";
import {ListItemsPaginate} from "./ListItemsPaginate.jsx";

export const DynamicDisplay = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {status, search, direction, orderBy, page, setTotalPages} = useClassroom();

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await classroom.getAllClassrooms({
          keywords: search,
          order_by: orderBy,
          order_direction: direction,
          status: status,
          page: page,
        });

        setClassrooms(response.data);
        setTotalPages(response.meta.last_page);
      } catch (err) {
        setError(err.message);
        throw err
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchClassrooms();
  }, [search, orderBy, direction, status, page])

  return (
    <>
      <ListItemsPaginate/>
      <div className="mt-4">
        <div className="block lg:hidden">
            <ListItems data={classrooms} loading={loading}/>
        </div>
        <div className="hidden lg:block">
          <Table data={classrooms} loading={loading}/>
        </div>
      </div>
    </>
)
}

