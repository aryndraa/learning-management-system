import PropTypes from "prop-types";

export const DefaultLayout = ({ children }) => {
  return (
   <div className="px-4 md:px-12 xl:px-24">
     {children}
   </div>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
