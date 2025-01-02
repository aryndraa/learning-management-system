import i18n from 'i18next';
import { initReactI18next} from "react-i18next";

const resources = {
  en : {
    translation: {
      welcome : "Welcome",
      language: "Language",
      csServiceLink: "Need Help?",

      loginPage : {
        greeting : "Welcome Back!",
        subtitle : "Don't have an account?",
        actionSubTitle: "Sign up",
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
        greeting : "Selamat Datang!",
        subtitle : "Belum punya akun?",
        actionSubTitle: "Daftar!",
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