import React, { useState } from "react";
import axios from "axios";

import Dropdown from "../../../globalComponents/reusable/dropdown/Dropdown";
import { useEffect } from "react";
import "./upload.css";

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
  const [formValue, setformValue] = React.useState({
    category: "",
    title: "",
    description: "",
    imgUrl: "",
  });

  const [countries, setCountries] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  // };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    setDescription(event.target.value);
    setImgUrl(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImgUrl(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      "https://mixed-wedding.herokuapp.com/countries"
    );
    setCountries(data);
  };

  //uploading new Post
  const postData = () => {
    const newPost = {};
    axios.post("url", newPost);
  };

  return (
    <div className="card">
      <div className="card-dropdown">
        <Dropdown
          label="choose country"
          options={countries}
          value={countries}
          onChange={handleChange}
        />
      </div>
      <div className="card-category">
        <Dropdown
          label="choose category"
          options={categories}
          value={category}
          onChange={handleChangeCategory}
        />
      </div>
      <div className="title-category">Title</div>
      <input type="text" value={title} onChange={handleChangeTitle} />
      <div
        className="description"
        value={description}
        onChange={handleChangeDescription}
      >
        description
      </div>
      <input type="text" />
      <div className="img-category" value={imgUrl} onChange={handleChangeImage}>
        image
      </div>
      <input type="text" />
      <button type="submit" onClick={postData}>
        Submit
      </button>
    </div>
  );
};

export default Upload;
