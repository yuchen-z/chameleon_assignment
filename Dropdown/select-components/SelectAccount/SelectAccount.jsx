import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { DropdownContext } from "../../Dropdown";
import Select from "../Select/Select";
import { httpGet } from "lib/http";

function SelectAccount({
  curUserId,
  className = "dropdown-button",
  label = "sign in",
}) {
  const { setIsOpen, selection, setSelection, setlistItems } =
    useContext(DropdownContext);

  useEffect(() => {
    httpGet(`user/${curUserId}`)
      .then((res) => res.json())
      .then((data) => setSelection(`dropdown_${data.name}`))
      .catch((e) => console.error(e));
  }, [curUserId, setSelection, selection]);

  const loadAccounts = () => {
    httpGet(`users`)
      .then((res) => res.json())
      .then((data) => {
        setlistItems(data);
        setIsOpen(true);
      })
      .catch((e) => console.error(e));
  };

  return curUserId ? (
    <Select onClick={loadAccounts} className={className} label={selection}>
      {selection}
    </Select>
  ) : (
    <Select
      label={label}
      onClick={() => (location.href = "/sign-in")}
      className={className}
    />
  );
}

SelectAccount.propTypes = {
  curUserId: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
};

export default SelectAccount;