import {Helmet} from "react-helmet";
// import {useTranslation} from "react-i18next";
import AuthLayout from "../../layouts/AuthLayout.jsx";
import {Link} from "react-router";
import {useForm} from "react-hook-form";
import AuthLabel from "../../components/form/AuthLabel.jsx";
import loginSVG from "../../assets/login.svg";

export default function Login() {
  // const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return(
    <AuthLayout>
      <Helmet>
        <title>LMS - Student Login</title>
      </Helmet>

      <div className="flex items-center min-h-[80vh] gap-24 justify-between ">
        <div className="w-[40%]">
          <div className="mb-8">
            <h1 className="text-4xl font-medium tracking-wider mb-2">Welcome Back</h1>
            <p className='text-lg'>Don&apos;t have an account? <Link to={'/register'} className="text-primary ">Sign up</Link></p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
              <div className="flex flex-col gap-6 mb-12">
                <AuthLabel
                  id="username"
                  type="text"
                  name="username"
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

              <button type="submit" className="bg-primary hover:bg-primary/90 transition p-4 text-white font-medium text-lg rounded-lg">Login</button>
            </form>
          </div>

        </div>
        <div>
          <img src={loginSVG} alt="" className="w-full"/>
        </div>
      </div>
    </AuthLayout>

  )
}