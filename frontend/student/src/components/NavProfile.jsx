import {useEffect, useState} from "react";
import profile from "../api/profile.js";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="pl-8 flex items-center gap-4">
        <span className="text-lg font-medium">{avatarProfile.name}</span>
        {avatarProfile.avatar ?
          <img src={avatarProfile.avatar} alt="" className="w-[46px] h-[46px] rounded-full object-center object-cover"/>
          :
          <div className="text-lg p-2 px-4 rounded-full bg-primary text-white border">A</div>}
      </div>
    </>
  )
}