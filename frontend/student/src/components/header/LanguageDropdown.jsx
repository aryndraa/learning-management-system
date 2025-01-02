import { FiGlobe } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import {useState} from "react";

const LanguageDropdown = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "id", label: "Bahasa Indonesia" },
  ];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    console.log(i18n)
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
          <p className="text-sm md:text-lg font-medium">{i18n.language.toUpperCase()}</p>
          <FaChevronDown  className="hidden md:block"/>
        </div>

        {isOpen && (
          <div className="absolute mt-4 rounded-md bg-white p-4 z-10 w-56">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left py-1 px-2 ${
                  i18n.language === lang.code ? 'font-bold' : ''
                } hover:bg-gray-100`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default LanguageDropdown;