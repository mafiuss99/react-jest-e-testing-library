import "./style.css";
import P from "prop-types";

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
