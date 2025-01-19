import i18n from 'i18next';
import { initReactI18next} from "react-i18next";

const resources = {
  en : {
    translation: {
      welcome : "Welcome",
      language: "Language",
      csServiceLink: "Need Help?",

      loginPage : {
        greeting : "Admin Panel",
        subtitle : "Please login to access dashboard",
        placeholder: "Enter Your",
        btnLogin : "Login",
      }
    },
  },
  id : {
    translation: {
      welcome : "Selamat Datang",
      language : "Bahasa",
      csServiceLink: "Butuh Bantuan?",

      loginPage : {
        greeting : "Admin Panel",
        subtitle : "Silakan login untuk mengakses dashboard",
        placeholder: "Masukan",
        btnLogin : "Masuk",

      }
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