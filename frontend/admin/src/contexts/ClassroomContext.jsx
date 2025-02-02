import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ClassroomContext = createContext();

export const ClassroomProvider = ({children}) => {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("id");
  const [direction, setDirection] = useState("asc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <ClassroomContext.Provider value={{
      status,
      setStatus,
      search,
      setSearch,
      direction,
      setDirection,
      orderBy,
      setOrderBy,
      page,
      setPage,
      totalPages,
      setTotalPages
    }}>
      {children}
    </ClassroomContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useClassroom = () => useContext(ClassroomContext);

ClassroomProvider.propTypes = {
  children: PropTypes.node.isRequired,
}