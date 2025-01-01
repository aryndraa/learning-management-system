import Logo from "../Logo.jsx";
import LanguageDropdown from "./LanguageDropdown.jsx";
import {Link} from "react-router";

export const AuthHeader = () => {
  return (
    <>
      <div className="flex px-4 md:px-12 xl:px-24 py-6 md:py-8 justify-between items-center">
        <Logo/>
        <div className="flex items-center">
          <div className="pr-2 md:pr-6">
            <LanguageDropdown language={'En'}/>
          </div>
          <Link to={'/cs-service'} className="text-sm md:text-lg pl-2 md:pl-6 border-l border-font-300 font-medium text-font-300">Need Help?</Link>
        </div>
      </div>
    </>
  )
}