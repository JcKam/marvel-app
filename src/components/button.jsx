import "./button.css";

const Button = ({ style, type, label, size, disabled, state, setState }) => {
  return (
    <button
      type={type}
      disabled={state}
      className={style + " " + size + " button"}
      onClick={setState}
    >
      {label}
    </button>
  );
};

export default Button;
