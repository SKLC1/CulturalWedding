import "./dropdown.css"

import React from "react";
import "./dropdown.css";

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="dropdown">
      <label className="dropdown-title">
        {label}
        <br></br>
        <br></br>
        <select
          className="dropdown-select"
          value={value}
          onChange={({ target }) => onChange(target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>

  );
};

export default Dropdown;
