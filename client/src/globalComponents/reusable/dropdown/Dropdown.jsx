import React from "react";

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <br></br>
      <select value={value} onChange={({ target }) => onChange(target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
