import Logo from "../Logo.jsx";
import { IoNotificationsOutline, IoSettingsOutline  } from "react-icons/io5";
import {NavProfile} from "../NavProfile.jsx";


export const DefaultHeader = () => {
  return (
    <>
      <div className="flex px-4 md:px-12 xl:px-24 py-6 justify-between items-center border-b border-border bg-white">
        <Logo/>
        <div className="flex items-center">
          <div className="pr-8 border-r border-border flex gap-4">
            <button className="text-2xl  p-2 border rounded-full border-font-100">
              <IoNotificationsOutline/>
            </button>
            <button className="text-2xl  p-2 border rounded-full border-font-100">
              <IoSettingsOutline/>
            </button>
          </div>
          {/*<div className="pl-8 flex items-center gap-4">*/}
          {/*  <span className="text-lg font-medium">Arya</span>*/}
          {/*  <div className="text-lg p-2 px-4 rounded-full bg-primary text-white border">A</div>*/}
          {/*</div>*/}
          <NavProfile/>
        </div>
      </div>
    </>
  )
}