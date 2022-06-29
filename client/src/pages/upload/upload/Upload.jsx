import React, { useState } from "react";
import axios from "axios";

import Dropdown from "../../../globalComponents/reusable/dropdown/Dropdown";
// import "../cultureCard.css";

const mockData = [
  {
    categoryTitle: "Food",
    description: "this is a great m,m,m,mjhgug",
    img: "url",
  },
  {
    categoryTitle: "Outfits",
    description: "2this is a great m,m,m,mjhgug",
    img: "url2",
  },
  {
    categoryTitle: "Traditions",
    description: "2this is a great m,m,m,mjhgug",
    img: "url2",
  },
];

const countryOptions = [
  { label: "country1", value: "County1" },
  { label: "country2", value: "County2" },
  { label: "country3", value: "County3" },
  { label: "country4", value: "County4" },
  { label: "country5", value: "County5" },
  { label: "country6", value: "County6" },
];

const categories = [
  { label: "", value: "" },
  { label: "Food", value: "Food" },
  { label: "Outfits", value: "Outfits" },
  { label: "Traditions", value: "Tradition" },
];

const Upload = () => {
  const [country, setCountry] = useState("country");
  const [category, setCategory] = useState("");
  const [backenedData, setBackendData] = [];

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setBackendData(data.message));
  // }, []);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const getFromBackend = async () => {
    await axios.get("");
    console.log("submit");
  };

  return (
    <div className="card">
      <div className="card-dropdown">
        {/* <label>
          select a country<br></br>
          <select value={country} onChange={handleChange}>
            {countryOptions.map((option) => (
              <option value={option.country}>{option.label}</option>
            ))}
          </select>
        </label> */}
        <Dropdown
          label="choose country"
          options={countryOptions}
          value={country}
          onChange={handleCountryChange}
        />
      </div>
      <div className="card-category">
        <Dropdown
          label="choose category"
          options={categories}
          value={category}
          onChange={handleCategoryChange}
        />
      </div>
      <div className="title-category">Title</div>
      <input type="text" />
      <div className="description">description</div>
      <input type="text" />
      <div className="img-category">image</div>
      <input type="text" />
      <button type="submit" onClick={getFromBackend}>
        Submit
      </button>
    </div>
  );
};

export default Upload;
