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
          <FiGlobe className="text-xl md:text-2xl"/>
          <p className="text-base md:text-lg font-medium uppercase">{i18n.language}</p>
          <FaChevronDown  className="hidden md:block"/>
        </div>

        {isOpen && (
          <div className="absolute mt-4 rounded-md bg-white py-2 px-4 z-10 w-44 -left-4 shadow-md">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left py-1  text-sm md:text-base ${
                  i18n.language === lang.code ? 'text-primary font-medium' : ''
                } `}
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