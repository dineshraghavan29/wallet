import React from "react";
import { Dropdown } from "react-bootstrap";

function DropDownList({ selectedItem, itemList, onSelect }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedItem}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {itemList.map((item) => (
          <Dropdown.Item key={item} onClick={() => onSelect(item)}>
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownList;
