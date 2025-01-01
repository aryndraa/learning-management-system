import {AuthHeader} from "../../components/header/AuthHeader.jsx";
import {Helmet} from "react-helmet";

export default function Login() {
  return(
    <>
      <Helmet>
        <title>LMS - Student Login</title>
      </Helmet>
      <AuthHeader/>
      <h1>Login</h1>
    </>
  )
}