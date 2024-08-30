import "./style.css";
import P from "prop-types";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type Your Search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string,
  handleChange: P.func.isRequired,
};
