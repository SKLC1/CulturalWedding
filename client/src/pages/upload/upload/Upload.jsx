import "./upload.css";

import React, { useState } from "react";

import Dropdown from "../../../globalComponents/reusable/dropdown/Dropdown";
import axios from "axios";
import { useEffect } from "react";

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
    <div>
      <h1>Share With Us!</h1>
    <div className="card">
       

      <div className="card-dropdown">
        <Dropdown
          label="Choose Country"
          options={countries}
          value={countries}
          onChange={handleChange}
        />
      </div>


      <div className="card-category">
        <Dropdown
          label="Choose Category"
          options={categories}
          value={category}
          onChange={handleChangeCategory}
        />
      </div>

      <div className="title-field">
        <div className="title-category">Title</div>
        <input type="text" value={title} onChange={handleChangeTitle} />
      </div>

      <div className="img-field">
      <div className="img-category" value={imgUrl} onChange={handleChangeImage}>
        Upload Image
      </div>
      <input type="text" className="file-upload"/>
      </div>

      <div className="Description-field">
      <div className="Description-text">Description</div>
      <div
        className="description"
        value={description}
        onChange={handleChangeDescription}
      >
      </div>
      <input type="text" />
      </div>




      <button type="submit" onClick={postData} className="btn-submit">
        Submit
      </button>
    </div>
    </div>
  );
};

export default Upload;
