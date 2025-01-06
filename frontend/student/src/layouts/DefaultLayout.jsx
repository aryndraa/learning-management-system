import PropTypes from "prop-types";
import {DefaultHeader} from "../components/header/DefaultHeader.jsx";
import {Navigation} from "../components/Navigation.jsx";

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <DefaultHeader/>
      <Navigation/>
      <div className="px-4 md:px-12 xl:px-24">
        {children}
      </div>
    </>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
