import { IoMdMore } from "react-icons/io";
import {useState} from "react";
import {ProfileCardOption} from "./ProfileCardOption.jsx";
import {LogoutModal} from "./LogoutModal.jsx";

export const ProfileCard = () => {

  const [modalActive, setModalActive] = useState(false);

  const [modalLogout, setModalLogout] = useState(false);

  return (
    <>
      <div className="flex lg:flex-col lg:gap-4 justify-between items-center p-4 bg-white rounded-lg relative">
        <div className="flex lg:flex-col items-center gap-4 md:gap-5 w-full  lg:pb-6 lg:border-b border-border ">
          <img
            src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
            alt=""
            className="w-12 md:w-14 lg:w-36 h-12 md:h-14 lg:h-36 object-cover rounded-full place-self-center"
          />
          <div className="lg:text-center">
            <p className="text-sm md:text-lg text-font-100">Welcome,</p>
            <h2 className="text-font-200 md:text-xl  md:font-medium">Admin Slebew</h2>
          </div>
        </div>

        <div className="flex lg:flex-col items-center gap-2 lg:w-full">
          <button
            className="text-2xl p-2 border-font-100 border rounded-full text-font-100 lg:hidden "
            onClick={() => setModalActive(!
              modalActive)}
          >
            <IoMdMore />
          </button>
         <ProfileCardOption modalActive={modalActive} setModalLogout={setModalLogout}/>
        </div>
      </div>

      <LogoutModal setModalActive={setModalLogout} modalActive={modalLogout}/>
    </>
  )
}