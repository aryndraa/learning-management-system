import {useState} from "react";
import {useClassroom} from "../../contexts/ClassroomContext.jsx";

export const CheckStatus = () => {

  const [openModal, setOpenModal] = useState(false);
  const { status, setStatus } = useClassroom();

  const handeSetStatus = (status) => {
    setStatus(status);
    setOpenModal(false);
  }

  return (
    <div className="relative">
      <button
        className="px-4 py-3 bg-neutral-100 font-medium rounded-lg text-font-100 text-sm capitalize"
        onClick={() => setOpenModal(!openModal)}
      >
        Status : {status} Class
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

