import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import AuthLabel from "../../components/form/AuthLabel.jsx";
import loginSVG from "../../assets/studentLogin.svg";
import auth from '../../api/auth.js'
import {useState} from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const  { t } = useTranslation();
  const [, setError] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const userData = await auth.login(data.username, data.password);
      toast.info("Login successfully");
      console.log("login successfully : ", userData);
      setLoading(false);

      window.location.replace(import.meta.env.VITE_APP_URL);
    } catch (error) {
      toast.error("username atau password salah");
      setLoading(false);

      setError(error);
    }
  };

  return(
    <div>
      <Helmet>
        <title>LMS - Student Login</title>
      </Helmet>

      <ToastContainer position="top-center" autoClose={3000} />

      <div className="flex mt-8 md:items-center md:mt-0 min-h-[80vh] lg:gap-24 justify-between ">
        <div className="w-full lg:w-[40%]">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl font-medium tracking-wider mb-1 md:mb-2 leading-[1.4]">{t('loginPage.greeting')}</h1>
            <p className='text-base md:text-lg'>{t('loginPage.subtitle')}</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
              <div className="flex flex-col gap-6 mb-12">
                <AuthLabel
                  id="username"
                  type="text"
                  name="username"
                  placeholder={t('loginPage.placeholder')}
                  register={register}
                  validation={{
                    required: "Username is required",
                  }}
                  error={errors.username}
                />
                <AuthLabel
                  id="password"
                  type="password"
                  name="password"
                  placeholder={t('loginPage.placeholder')}

                  register={register}
                  validation={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  }}
                  error={errors.password}
                />
              </div>

              {loading ?
                <button
                  disabled
                  className="bg-primary hover:bg-primary/90 transition p-4 py-[1.1rem] text-white font-medium text-lg rounded-lg flex justify-center items-center "
                >
                  <span className="loading loading-dots loading-md"></span>
                </button>
                :
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 transition p-4 text-white font-medium text-lg rounded-lg"
                >
                  {t('loginPage.btnLogin')}
                </button>
              }
            </form>
            {/*{error && <p>{error}</p>}*/}
          </div>

        </div>
        <div>
          <img src={loginSVG} alt="" className="w-full hidden lg:block"/>
        </div>
      </div>
    </div>

  )
}