import {useEffect, useState} from "react";
import profile from "../api/profile.js";

export const NavProfile = () => {

  const [avatarProfile, setAvatarProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthProfile = async () => {
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

    fecthProfile()
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>

    </>
  )
}