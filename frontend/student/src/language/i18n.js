import i18n from 'i18next';
import { initReactI18next} from "react-i18next";

const resources = {
  en : {
    translation: {
      welcome : "Welcome",
      language: "Language",
      csServiceLink: "Need Help?",
    },
  },
  id : {
    translation: {
      welcome : "Selamat Datang",
      language : "Bahasa",
      csServiceLink: "Butuh Bantuan?",

    }
  }
}


i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});


export default i18n;