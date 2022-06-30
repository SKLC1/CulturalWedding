import "./upload.css";
import React, { useState } from "react";
import Dropdown from "../../../globalComponents/reusable/dropdown/Dropdown";
import { API } from "../../../api/api";
import { useEffect } from "react";
import { authContext, useToken } from "../../../context/context";

const categories = [
  { label: "Choose Category", value: "" },
  { label: "Food", value: "Food" },
  { label: "Outfits", value: "Outfits" },
  { label: "Traditions", value: "Tradition" },
];

const Upload = () => {
  const {token} = useToken(authContext);
  const [success, setSuccess] = useState(false);
  const [card, setCard] = useState({});
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleChange = (val) => {
    // console.log(val);
    setCountry(val);
  };

  const handleChangeCategory = (val) => {
    setCategory(val);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImgURL(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await API.get(
      "/countries"
    );
    data.unshift({ value: "choose", label: "choose" });
    setCountries(data);
  };

  //uploading new Post
  const postData = async() => {
    try {
      const newPost = {category, title, imgURL, description, name: country};
      const {data}= await API.post("/countries", newPost, {headers: {Authorization: 'Bearer ' + token}});
      setCard(data);
      setSuccess(true);
      setCountry("");
      setDescription("");
      setTitle("");
      setImgURL("");
      setCategory("");
    } catch (e) {
      console.log(e);
    }
  };

  if(success) {
    return (
      <div className="success">
        <h1>{`you uploaded this card ${card.title}`}</h1>
      </div>
    )
  }

  return (
    <div className="card">
    {/* {console.log(title)}
    {console.log(imgURL)}
    {console.log(description)} */}

      <div className="card-dropdown">
        <Dropdown
          label="Choose Country"
          options={countries}
          value={country}
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
      <div className="img-category" >
        Upload Image
      </div>
      <input type="text" className="file-upload" value={imgURL} onChange={handleChangeImage}/>
      </div>

      <div className="Description-field">
      <div className="Description-text">Description</div>
      <div className="description">
      <input type="text" value={description}
        onChange={handleChangeDescription}/>
      </div>
      </div>




      <button type="submit" onClick={postData} className="btn-submit">
        Submit
      </button>
    </div>
  );
};

export default Upload;
