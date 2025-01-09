import {IoNotificationsOutline} from "react-icons/io5";

export const NotificationButton = ({notifications}) => {
  return (
    <>
      <button className="text-2xl  p-2 border rounded-full border-font-100">
          <IoNotificationsOutline/>
      </button>
    </>
  )
}