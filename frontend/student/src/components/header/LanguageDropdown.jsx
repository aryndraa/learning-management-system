import { FiGlobe } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const LanguageDropdown = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2 text-font-300">
          <FiGlobe className="text-2xl"/>
          <p className="text-lg font-medium">En</p>
          <FaChevronDown />
        </div>
      </div>
    </>
  )
}

export default LanguageDropdown;