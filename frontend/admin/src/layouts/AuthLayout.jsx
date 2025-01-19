import {AuthHeader} from "../components/header/AuthHeader.jsx";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthHeader/>
      <div className="px-5 md:px-12 xl:px-24 text-black bg-background min-h-[100vh] ">
        {children}
      </div>
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
