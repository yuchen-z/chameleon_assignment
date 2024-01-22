import PropTypes from "prop-types";
import { useContext } from "react";
import { DropdownContext } from "../../Dropdown";

function List({
  children,
  className = "dropdown-open dropdown-menu dropdown-section",
  noOptionText = "no options",
}) {
  const { isOpen } = useContext(DropdownContext);
  return (
    <ul
      style={{ display: isOpen ? "block" : "none" }}
      className={className}
      role="menu"
      aria-hidden={!isOpen}
    >
      {children ? children : noOptionText}
    </ul>
  );
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noOptionText: PropTypes.string,
};

export default List;
