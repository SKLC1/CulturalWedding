import React, { useState } from "react";
// import CultureCard from "./components/CultureCard";
import "./ceremony.css";
import Dropdown from "../../globalComponents/reusable/dropdown/Dropdown";

const countryOptions = [
  { label: "country1", value: "County1" },
  { label: "country2", value: "County2" },
  { label: "country3", value: "County3" },
  { label: "country4", value: "County4" },
  { label: "country5", value: "County5" },
  { label: "country6", value: "County6" },
];

const Ceremony = () => {
  const [country, setCountry] = useState("country");
  return (
    <div>
      <Dropdown
        label="Choose the bride's culture"
        options={countryOptions}
        value={country}
        onChange={() => {
          console.log("Brides clicked");
        }}
      />
      <br />
      <Dropdown
        label="Choose the groom's culture"
        options={countryOptions}
        value={country}
        onChange={() => {
          console.log("Groom clicked");
        }}
      />
    </div>
  );
};

export default Ceremony;
