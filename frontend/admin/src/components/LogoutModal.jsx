import PropTypes from "prop-types";
import { IoIosClose } from "react-icons/io";

export const LogoutModal = ({modalActive = true, setModalActive}) => {
  return (
    <>
      <div
        className={`min-h-screen w-full z-40 fixed top-0 left-0 bottom-0 right-0 bg-font-100/40 ${
          modalActive ? "block" : "hidden"
        }`}
        onClick={() => {
          setModalActive(!modalActive)
        }}
      ></div>
      <div className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white z-50 p-5 rounded-lg w-[35%] ${
        modalActive ? "block" : "hidden"
      }`}>
        <div>
          <h2 className="text-2xl font-medium text-font-200 pb-3 border-b-border border-b mb-3">Are You Sure?</h2>
          <div>
            <p className="text-font-100 mb-6 ">Are you sure you want to log out of your account? All active sessions will be terminated, and you will need to log back in to access the app.</p>
            <div className='flex gap-3'>
              <button className="py-2 px-4 border text-danger border-transparent bg-danger/5 font-medium rounded-lg">Log Out</button>
              <button
                className="py-2 px-4 border  rounded-lg border-transparent bg-font-100/10 text-font-200 font-medium"
                onClick={() => {
                  setModalActive(!modalActive)
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

LogoutModal.propTypes = {
  modalActive: PropTypes.bool,
  setModalActive: PropTypes.func,
}