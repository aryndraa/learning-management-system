import {useEffect, useState} from "react";
import profile from "../api/profile.js";
import {NavProfileLink} from "./NavProfileLink.jsx";

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



  return (
    <>
      {loading ?

        <div className="ml-8 flex items-center gap-2 bg-neutral-100 py-2 px-2 rounded-full">
          <span className="bg-neutral-200 rounded-full w-44 h-[46px]"></span>
          <span className="bg-neutral-200 rounded-full w-[46px] h-[46px]"></span>
          <span className="bg-neutral-200 rounded-full w-[46px] h-[46px]"></span>
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

          <NavProfileLink />
        </div>
      }
    </>
  )
}