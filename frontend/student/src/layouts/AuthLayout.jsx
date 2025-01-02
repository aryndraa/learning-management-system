import {AuthHeader} from "../components/header/AuthHeader.jsx";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <>
      <AuthHeader/>
      <div className="px-24 text-black">
        {children}
      </div>
    </>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
