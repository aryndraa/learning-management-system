import {IoNotificationsOutline} from "react-icons/io5";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import notificationData from "../dummy/notificationData.js";
import { RiErrorWarningLine } from "react-icons/ri";

export const Notification = () => {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async() => {
      const response = await notificationData;
      setNotifications(response)
    }

    getNotifications()
  }, [])

  const getNotifType = (notification) => {
    if(notification.type === "success") {
      return "text-success bg-success/10"
    } else if (notification.type === "info") {
      return "text-primary bg-primary/10"
    } else if (notification.type === "warning") {
      return "text-warning bg-warning/10"
    }

    return "text-danger bg-danger/10"
  }

  return (
    <>
      <button className="text-2xl  p-2 border rounded-full border-font-100 relative" onClick={()=>document.getElementById('my_modal_2').showModal()}>
        <div
          className={`${notifications.length > 0 ? "block" : "hidden"} absolute -top-2 left-6 rounded-full bg-primary text-sm text-white py-0.5 px-2`}
        >{notifications.length}</div>
        <IoNotificationsOutline/>
      </button>

      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box bg-white">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold mb-2">Notification</h1>
            <p className="text-font-100 ">You have {notifications.length} notification</p>
          </div>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index} className="py-4 border-b border-b-border last:border-none">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg mb-1">{notification.title}</h3>
                    <p className="text-sm text-font-100">{notification.description.length > 40 ? notification.description.slice(0, 40) + "..." : notification.description}</p>
                  </div>
                  <span className={`p-2 text-2xl rounded-full ${getNotifType(notification)}`}><RiErrorWarningLine/></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )

}

Notification.propTypes = {
  notifications: PropTypes.number,
}