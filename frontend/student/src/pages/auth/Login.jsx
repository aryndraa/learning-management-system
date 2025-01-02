import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import AuthLayout from "../../layouts/AuthLayout.jsx";

export default function Login() {
  const { t } = useTranslation();
  return(
    <AuthLayout>
      <Helmet>
        <title>LMS - Student Login</title>
      </Helmet>

      <h1>{t('welcome')}</h1>
    </AuthLayout>

  )
}