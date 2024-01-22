import PropTypes from "prop-types";
import { useContext } from "react";
import { DropdownContext } from "../../Dropdown";

function Select({ children, label, onClick, className = "dropdown-button" }) {
  const { isOpen, setIsOpen, selection } = useContext(DropdownContext);
  return (
    <button
      onClick={onClick ? onClick : () => setIsOpen(!isOpen)}
      className={className}
      aria-haspopup="true"
      aria-expanded={isOpen}
      aria-controls="dropdown-menu"
    >
      {selection ? selection : label}
    </button>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Select;
