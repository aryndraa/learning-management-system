import PropTypes from "prop-types";

export const ActivityItem = ({avatar, name, activity, created_at}) => {
  return (
    <>
      <div className="bg-white py-4 px-2 flex justify-between  border-b border-border last:border-none">
        <div className="flex flex-col gap-3">
          <img
            src={avatar}
            alt=""
            className="w-12 h-12 object-cover rounded-full"
          />
          <div>
            <h2 className="text-lg font-medium text-font-300 ">{name}</h2>
            <p className="text-font-100 ">{activity}</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-font-100 ">
            {created_at}
          </p>
        </div>
      </div>
    </>
  )
}

ActivityItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
}