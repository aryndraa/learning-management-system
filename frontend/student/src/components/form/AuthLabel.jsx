import PropTypes from "prop-types";

const AuthLabel = (props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={props.id} className="text-lg text-font-100 capitalize">{props.name}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={`${props.placeholder} ${props.name}!`}
        className="bg-white border border-font-100 p-3 rounded-lg placeholder:text-font-100 focus:outline-none"
        {...props.register(props.id, props.validation)}
      />
      {props.error && <p className="text-red-500 text-sm mt-1">{props.error.message}</p>}
    </div>
  )
}

 AuthLabel.propTypes = {
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   register: PropTypes.func.isRequired,
   validation: PropTypes.object.isRequired,
   error: PropTypes.object,
 };

export default AuthLabel