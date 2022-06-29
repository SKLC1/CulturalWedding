import React, { useState, useEffect } from "react";
import axios from "axios";
// import CultureCard from "./components/CultureCard";
import "./ceremony.css";
import Dropdown from "../../globalComponents/reusable/dropdown/Dropdown";
import Card from "../../globalComponents/reusable/dropdown/Card";

const Ceremony = () => {
  const [country, setCountry] = useState([]);
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");

  useEffect(() => {
    const updateStats = async () => {
      const { data } = await axios.get(
        `https://mixed-wedding.herokuapp.com/countries`
      );
      console.log(data);
      setCountry(data);
    };
    updateStats();
  }, []);

  const handleClick = async () => {
    console.log(bride);
    console.log(groom);
    const { data } = await axios.get(
      `https://mixed-wedding.herokuapp.com/countries/${bride}/${groom}`
    );
    // console.log(data);
    setCountry(data);
  };
  return (
    <div>
      <Dropdown
        label="Choose the bride's culture"
        options={country}
        value={bride}
        onChange={(val) => {
          setBride(val);
        }}
      />
      <br />
      <Dropdown
        label="Choose the groom's culture"
        options={country}
        value={groom}
        onChange={(val) => {
          setGroom(val);
        }}
      />
      <br />
      <button type="submit" onClick={handleClick}>
        Generate
      </button>
      <Card
        category="Food"
        title="title"
        // {bride.title}
        // {bride.description}
        img={bride.imgURL}
        description="description"
      />
      <Card
        category="Outfit"
        title={groom.title}
        img={groom.imgURL}
        description={groom.description}
      />
      <Card
        category="Tradition"
        title={bride.title}
        img={bride.imgURL}
        description={bride.description}
      />
    </div>
  );
};

export default Ceremony;
