import AuthLabel from "../../components/form/AuthLabel.jsx";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import {Helmet} from "react-helmet";

export function Login() {
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

    // try {
    //   const userData = await auth.login(data.username, data.password);
    //   toast.info("Login successfully");
    //   console.log("login successfully : ", userData);
    //   setLoading(false);
    //
    //   window.location.replace(import.meta.env.VITE_APP_URL);
    // } catch (error) {
    //   toast.error("username atau password salah");
    //   setLoading(false);
    //
    //   setError(error);
    // }
  };

  return (
    <>
      <div>
        <Helmet>
          <title>LMS - Student Login</title>
        </Helmet>

        <ToastContainer position="top-center" autoClose={3000}/>

        <div className="flex  md:mt-0 min-h-[95vh] pt-28 md:items-center  md:min-h-screen md:pt-12  justify-center    ">
          <div className="w-full lg:w-[42%] bg-white px-4 md:px-8 py-8 md:py-10 rounded-lg h-fit">
            <div className="mb-6 md:mb-8">
              <h1
                className="text-2xl md:text-4xl font-medium tracking-wider mb-1 md:mb-2 leading-[1.4]">{t('loginPage.greeting')}</h1>
              <p className='text-sm md:text-lg'>{t('loginPage.subtitle')}</p>
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
        </div>
      </div>
    </>
  )
}