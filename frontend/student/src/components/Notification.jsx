import {IoNotificationsOutline} from "react-icons/io5";
import PropTypes from "prop-types";

export const Notification = ({ notifications = 0 }) => {

  return (
    <>
      <button className="text-2xl  p-2 border rounded-full border-font-100 relative" onClick={()=>document.getElementById('my_modal_2').showModal()}>
        <div
          className={`${notifications > 0 ? "block" : "hidden"} absolute -top-2 left-6 rounded-full bg-primary text-sm text-white py-0.5 px-2`}
        >{notifications}</div>
        <IoNotificationsOutline/>
      </button>

      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box bg-white">
          <h1 className="text-2xl font-semibold mb-2">Notification</h1>
          <p className="text-font-100 ">You have {notifications} notification</p>
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