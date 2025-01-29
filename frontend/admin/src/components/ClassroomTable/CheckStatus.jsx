import {useEffect, useState} from "react";
import {useStatus} from "../../contexts/StatusClassroomContext.jsx";

export const CheckStatus = () => {

  const [openModal, setOpenModal] = useState(false);
  const { status, setStatus } = useStatus();

  const handeSetStatus = (status) => {
    setStatus(status);
    setOpenModal(false);
  }

  return (
    <div className="relative">
      <button
        className="px-4 py-3 bg-background font-medium rounded-lg text-font-100"
        onClick={() => setOpenModal(!openModal)}
      >
        Status : <span className="capitalize">{status} Class</span>
      </button>
      <div className={`absolute  flex-col bg-white w-64 items-start rounded-lg shadow-md left-0 top-14 ${
        openModal ? "flex" : "hidden"
      }`}>
        <button
          className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm"
          onClick={() => handeSetStatus("all")}
        >
          All
        </button>
        <button
          className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm"
          onClick={() => handeSetStatus("online")}
        >
          Online
        </button>
        <button
          className="px-4 py-3 text-font-100 font-medium hover:bg-background w-full text-left text-sm"
          onClick={() => handeSetStatus("offline")}
        >
          Offline
        </button>
      </div>
    </div>
  )
}

