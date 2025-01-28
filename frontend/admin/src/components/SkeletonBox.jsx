import PropTypes from "prop-types";

export const SkeletonBox = ({height, width, support, children}) => {

  return (
      <div
        className={`bg-neutral-200 animate-pulse rounded-lg ${support}`}
        style={{
          height: `${height}`,
          width: `${width}`,
        }}
      >
        {children}
      </div>
  )
}

SkeletonBox.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  children: PropTypes.node,
  support: PropTypes.string,
}