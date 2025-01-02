import {AuthHeader} from "../components/header/AuthHeader.jsx";

// eslint-disable-next-line react/prop-types
export default function AuthLayout({ children }) {
  return (
    <>
      <AuthHeader/>
      <div className="px-24">
        {children}
      </div>
    </>
  )
}

