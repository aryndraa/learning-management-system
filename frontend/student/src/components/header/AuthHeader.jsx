import Logo from "../Logo.jsx";
import LanguageDropdown from "./LanguageDropdown.jsx";
import {Link} from "react-router";

export const AuthHeader = () => {
  return (
    <>
      <div className="flex px-24 py-8 justify-between items-center">
        <Logo/>
        <div className="flex items-center">
          <div className="pr-6">
            <LanguageDropdown language={'En'}/>
          </div>
          <Link to={'/cs-service'} className="text-lg pl-6 border-l border-font-300 font-medium text-font-300">Need Help?</Link>
        </div>
      </div>
    </>
  )
}