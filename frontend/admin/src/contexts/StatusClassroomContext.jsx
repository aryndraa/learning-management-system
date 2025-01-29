import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StatusClassroomContext = createContext();

export const StatusClassroomProvider = ({children}) => {
  const [status, setStatus] = useState("all");

  return (
    <StatusClassroomContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusClassroomContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStatus = () => useContext(StatusClassroomContext);

StatusClassroomProvider.propTypes = {
  children: PropTypes.node.isRequired,
}