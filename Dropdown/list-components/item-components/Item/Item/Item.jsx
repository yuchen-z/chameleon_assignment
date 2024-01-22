import PropTypes from "prop-types";
import { useContext } from "react";
import { DropdownContext } from "../../../../Dropdown";

function Item({ children, onClick }) {
  const { setSelection, setIsOpen } = useContext(DropdownContext);
  const clickItem = (node) => {
    setSelection(node);
    setIsOpen(false);
  };
  return (
    <li role="menuitem" onClick={onClick ? onClick : () => clickItem(children)}>
      {children}
    </li>
  );
}
Item.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Item;
