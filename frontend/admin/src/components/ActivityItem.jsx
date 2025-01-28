import PropTypes from "prop-types";

export const ActivityItem = ({avatar, name, activity, created_at, loading = false}) => {
  return (
    <>
    {loading ?
        <div>
        </div>
      :
      <div className="bg-white py-5 first:pt-0 md:first:pt-6 md:py-6 lg:py-5 px-2  flex flex-col-reverse md:flex-row justify-between  border-b border-border last:border-none">
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            {
              avatar !== null ?
                <img
                  src={avatar}
                  alt=""
                  className="max-w-12 min-w-12 max-h-12 h-12 object-cover rounded-full"
                />
                :
                <div className="max-w-12 min-w-12 max-h-12 min-h-12 bg-primary rounded-full uppercase flex items-center justify-center text-lg text-white font-medium">{name.charAt(0)}</div>
            }

            <div>
              <h2 className="text-lg md:text-xl md:mb-2 font-medium text-font-300 ">{name}</h2>
              <p className="text-font-100 ">{activity}</p>
            </div>
          </div>
          <div className="h-fit">
            <p className="text-sm md:text-base h-fit place-self-end font-medium text-font-100 text-nowrap">
              {created_at}
            </p>
          </div>
        </div>
      
      }
    </>
  )
}

ActivityItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  loading: PropTypes.bool
}