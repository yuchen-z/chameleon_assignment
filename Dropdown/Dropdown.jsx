import React, { useState, useRef, createContext } from "react";
import PropTypes from "prop-types";
import Select from "./select-components/Select/Select";
import SelectAccount from "./select-components/SelectAccount/SelectAccount";
import List from "./list-components/List/List";
import ListAccounts from "./list-components/ListAccounts/ListAccounts";
import Item from "./list-components/item-components/Item/Item/Item";
import useOnClickAway from "../hooks/useOnClickAway";
export const DropdownContext = createContext();

export const Dropdown = ({ children, className = "dropdown" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [selection, setSelection] = useState(null);
  const [listItems, setlistItems] = useState(null);
  const dropRef = useRef(null);
  useOnClickAway(dropRef, () => setIsOpen(false));

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        searchVal,
        setSearchVal,
        selection,
        setSelection,
        listItems,
        setlistItems,
      }}
    >
      <div className={className} ref={dropRef} aria-haspopup="true">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Dropdown.Select = Select;
Dropdown.SelectAccount = SelectAccount;
Dropdown.ListAccounts = ListAccounts;
Dropdown.List = List;
Dropdown.Item = Item;
