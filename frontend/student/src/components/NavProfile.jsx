import {useEffect, useState} from "react";
import profile from "../api/profile.js";
import { IoMenuOutline } from "react-icons/io5";
import {NavProfileModal} from "./NavProfileModal.jsx";

export const NavProfile = () => {

  const [avatarProfile, setAvatarProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await profile.avatarProfile()

        setAvatarProfile({
          name: response.data.name,
          avatar: response.data.avatar,
        })

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile()
  }, [])

  const [modalActive, setModalActive] = useState(false)

  return (
    <>
      {loading ?

        <div className="pl-8 flex items-center gap-2">
          <span className="skeleton rounded-full w-48 h-[46px]"></span>
          <span className="skeleton rounded-full w-[46px] h-[46px]"></span>
        </div>

        :

        <div className="ml-8 flex items-center gap-4 border border-border py-2 px-5 rounded-full relative">
          <span className="text-base font-medium">{avatarProfile.name}</span>
          {avatarProfile.avatar ?
            <img src={avatarProfile.avatar} alt=""
                 className="w-[42px] h-[42px] rounded-full object-center object-cover"/>
            :
            <div className="text-lg p-2 px-4 rounded-full bg-primary text-white border">A</div>
          }
          <button className="text-2xl" onClick={() => setModalActive(!modalActive)}>
            <IoMenuOutline/>
          </button>

          <NavProfileModal active={modalActive}/>
        </div>
      }
    </>
  )
}