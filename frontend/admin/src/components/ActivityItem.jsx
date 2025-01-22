import PropTypes from "prop-types";

export const ActivityItem = ({avatar, name, activity, created_at}) => {
  return (
    <>
      <div className="bg-white py-5 first:pt-0 px-2  flex flex-col-reverse justify-between  border-b border-border last:border-none">
        <div className="flex flex-col gap-3">
          {
            avatar ?
              <img
                src={avatar}
                alt=""
                className="w-12 h-12 object-cover rounded-full"
              />
              :
              <div className="w-12 h-12 bg-primary rounded-full uppercase flex items-center justify-center text-lg text-white font-medium">{name.charAt(0)}</div>
          }

          <div>
            <h2 className="text-lg font-medium text-font-300 ">{name}</h2>
            <p className="text-font-100  ">{activity}</p>
          </div>
        </div>
        <div className="h-fit">
          <p className="text-sm h-fit place-self-end font-medium text-font-100 text-nowrap">
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