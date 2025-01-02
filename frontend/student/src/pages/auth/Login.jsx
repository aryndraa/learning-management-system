import {AuthHeader} from "../../components/header/AuthHeader.jsx";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  return(
    <>
      <Helmet>
        <title>LMS - Student Login</title>
      </Helmet>
      <AuthHeader/>
      <h1>{t('welcome')}</h1>
    </>
  )
}