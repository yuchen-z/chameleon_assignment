import PropTypes from "prop-types";
import { useContext } from "react";
import { DropdownContext } from "../../Dropdown";
import List from "../List/List";
import Item from "../item-components/Item/Item/Item";
import { httpPatch } from "lib/http";

function ListAccounts() {
  const { listItems, setSelection, setIsOpen } = useContext(DropdownContext);

  const clickItem = (node) => {
    httpPatch("user", [`menu-item-${node.id}`, true])
      .then((res) => res.json())
      .then((data) => {
        setSelection(node);
        setIsOpen(false);
      })
      .catch((e) => console.error(e));
  };

  return (
    <List>
      {listItems &&
        listItems.map((a) => (
          <Item key={a.id} onClick={clickItem(a)}>
            {a.title}
          </Item>
        ))}
    </List>
  );
}

ListAccounts.PropTypes = {};
export default ListAccounts;
