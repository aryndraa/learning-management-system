import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ClassroomContext = createContext();

export const ClassroomProvider = ({children}) => {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  return (
    <ClassroomContext.Provider value={{ status, setStatus, search, setSearch }}>
      {children}
    </ClassroomContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useClassroom = () => useContext(ClassroomContext);

ClassroomProvider.propTypes = {
  children: PropTypes.node.isRequired,
}