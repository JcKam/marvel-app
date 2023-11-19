import "./input.css";

const Input = ({
  state,
  setState,
  label,
  type,
  id,
  name,
  required,
  errorMessage,
  errorStatus,
  helpMessage,
  placeholder,
  value,
}) => {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={id}>
        {label}&nbsp;
        <small>{helpMessage}</small>
        <small>(Required)</small>
      </label>
      <input
        className={state ? " input input-error" : "input "}
        id={id}
        type={type}
        name={name}
        onChange={(event) => {
          setState(event.target.value);
          console.log(event);
          console.log(event.target.value);
        }}
        placeholder={placeholder}
        value={value}
      ></input>

      {state === true && (
        <p className="input-help" aria-labelledby={id}>
          {showError}
        </p>
      )}
      {/* <FontAwesomeIcon icon="envelope" className="envelope" /> */}
    </div>
  );
};

export default Input;
