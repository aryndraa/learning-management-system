import {IoNotificationsOutline} from "react-icons/io5";
import PropTypes from "prop-types";

export const NotificationButton = ({ notifications = 0 }) => {

  return (
    <>
      <button className="text-2xl  p-2 border rounded-full border-font-100 relative">
        <div
          className={`${notifications > 0 ? "block" : "hidden"} absolute -top-2 left-6 rounded-full bg-primary text-sm text-white py-0.5 px-2`}
        >{notifications}</div>
        <IoNotificationsOutline/>
      </button>
    </>
  )

}

NotificationButton.propTypes = {
  notifications: PropTypes.number,
}