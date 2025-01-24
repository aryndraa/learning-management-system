import { IoMdMore } from "react-icons/io";
import {Link} from "react-router-dom";
import { FiUser, FiLogOut, FiInfo   } from "react-icons/fi";
import {useState} from "react";

export const ProfileCard = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white rounded-lg relative">
        <div className="flex items-center gap-4">
          <img
            src="http://127.0.0.1:8000/storage/teacher/avatars/1MNtbj4qcgARkmKWpQh0cAgFJAwJRqPQGDfGT5O4.jpg"
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <p className="text-sm text-font-100">Welcome,</p>
            <h2 className="text-font-200">Admin Slebew</h2>
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

          <div className={`bg-white flex-col absolute right-0 left-0 transform translate-y-32 shadow-md rounded-lg ${
            modalActive ? "flex" : "hidden"
          }`}>
            <Link to={'/profile'} className="py-4 px-4  hover:bg-background flex items-center gap-4 rounded-t-lg">
              <span className="text-xl"><FiUser/></span>
              Profile
            </Link>
            <Link to={'/options'} className="py-4 px-4  hover:bg-background flex items-center gap-x-4">
              <span className="text-xl"><FiInfo/></span>
              Options
            </Link>
            <button className="text-left py-4 px-4 hover:bg-background flex items-center gap-4 rounded-b-lg">
              <span className="text-xl"><FiLogOut/></span>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}