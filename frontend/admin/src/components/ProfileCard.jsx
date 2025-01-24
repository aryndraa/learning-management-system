import { IoMdMore } from "react-icons/io";
import {useState} from "react";
import {ProfileCardOption} from "./ProfileCardOption.jsx";

export const ProfileCard = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white rounded-lg relative">
        <div className="flex items-center gap-4 md:gap-5">
          <img
            src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
            alt=""
            className="w-12 md:w-14 h-12 md:h-14 object-cover rounded-full"
          />
          <div>
            <p className="text-sm md:text-lg text-font-100">Welcome,</p>
            <h2 className="text-font-200 md:text-xl md:font-medium">Admin Slebew</h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="text-2xl p-2 border-font-100 border rounded-full text-font-100 "
            onClick={() => setModalActive(!
              modalActive)}
          >
            <IoMdMore />
          </button>
         <ProfileCardOption modalActive={modalActive} />
        </div>
      </div>
    </>
  )
}