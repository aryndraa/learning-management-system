import PropTypes from "prop-types";

export const PageTitle = ({title}) => {
  return (
    <h1
      className="bg-white mb-4 px-4 py-4 text-xl font-semibold text-font-200 tracking-wider rounded-lg"
    >
      {title}
    </h1>

  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}