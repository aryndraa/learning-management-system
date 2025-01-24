import PropTypes from "prop-types";

export const PageTitle = ({title}) => {
  return (
    <h1
      className="bg-white p-4  text-xl md:text-2xl font-semibold text-font-200 tracking-wider rounded-lg"
    >
      {title}
    </h1>

  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}