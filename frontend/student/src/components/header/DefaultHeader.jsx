import Logo from "../Logo.jsx";
import { IoSettingsOutline  } from "react-icons/io5";
import {NavProfile} from "../NavProfile.jsx";
import {Notification} from "../Notification.jsx";


export const DefaultHeader = () => {
  return (
    <>
      <div className="flex px-4 md:px-12 xl:px-24 py-6 justify-between items-center border-b border-border bg-white">
        <Logo/>
        <div className="flex items-center">
          <div className="pr-8 border-r border-border flex gap-4">
            <Notification notifications={2}/>
            <button className="text-2xl  p-2 border rounded-full border-font-100">
              <IoSettingsOutline/>
            </button>
          </div>
          <NavProfile/>
        </div>
      </div>
    </>
  )
}