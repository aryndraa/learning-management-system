import { FiGlobe } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import {useState} from "react";

const LanguageDropdown = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <div>
        <div className="flex items-center gap-1 md:gap-2 text-font-300">
          <FiGlobe className="text-lg md:text-2xl"/>
          <p className="text-sm md:text-lg font-medium capitalize">{language}</p>
          <FaChevronDown  className="hidden md:block"/>
        </div>
      </div>
    </>
  )
}

export default LanguageDropdown;