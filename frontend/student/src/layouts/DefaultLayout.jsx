import PropTypes from "prop-types";
import {DefaultHeader} from "../components/header/DefaultHeader.jsx";
import {NavTab} from "../components/NavTab.jsx";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader/>
      <NavTab/>
      <div className="px-4 md:px-12 xl:px-24">
        {children}
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
