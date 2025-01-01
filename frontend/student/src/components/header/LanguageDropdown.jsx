import { FiGlobe } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const LanguageDropdown = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-1 2xl:gap-2 text-font-300">
          <FiGlobe className="text-lg 2xl:text-2xl"/>
          <p className="text-sm 2xl:text-lg font-medium">En</p>
          <FaChevronDown  className="hidden lg:block"/>
        </div>
      </div>
    </>
  )
}

export default LanguageDropdown;