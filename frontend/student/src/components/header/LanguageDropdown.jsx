import { FiGlobe } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import {useState} from "react";

const LanguageDropdown = () => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "id", label: "Bahasa Indonesia" },
  ];

  const handleChange = (event) => {
    setLanguage(event.target.value);
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 md:gap-2 text-font-300 cursor-pointer"
        >
          <FiGlobe className="text-lg md:text-2xl"/>
          <p className="text-sm md:text-lg font-medium">{language.toUpperCase()}</p>
          <FaChevronDown  className="hidden md:block"/>
        </div>

        {isOpen && (
          <div className="absolute mt-4 rounded-md bg-white p-4 z-10 w-56">
            {languages.map((lang) => (
              <label
                key={lang.code}
                className="flex items-center gap-2 cursor-pointer mb-2 last:mb-0"
              >
                <input
                  type="radio"
                  name="language"
                  value={lang.code}
                  checked={language === lang.code}
                  onChange={handleChange}
                  className="hidden cursor-pointer peer"
                />
                <span
                  className="w-5 h-5 border border-gray-400 rounded-full inline-block mr-2 relative before:content-[''] before:absolute before:bg-transparent before:w-3 before:h-3 before:rounded-full before:left-1/2 before:top-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 peer-checked:before:bg-primary peer-checked:border-primary"></span>
                {lang.label}
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default LanguageDropdown;