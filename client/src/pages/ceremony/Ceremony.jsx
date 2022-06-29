import React, { useState, useEffect } from "react";
import axios from "axios";
// import CultureCard from "./components/CultureCard";
import "./ceremony.css";
import Dropdown from "../../globalComponents/reusable/dropdown/Dropdown";
import Card from "../../globalComponents/reusable/dropdown/Card";

const Ceremony = () => {
  const [country, setCountry] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://mixed-wedding.herokuapp.com/countries")
  //     .then((res) => {
  //       console.log(res.json);
  //     })
  //     .then((data) => setCountry(data.message));
  // }, []);
  useEffect(() => {
    const updateStats = async () => {
      const { data } = await axios.get(
        `https://mixed-wedding.herokuapp.com/countries`
      );
      console.log(data);
      setCountry(data);
    };
    updateStats();
  });

  return (
    <div>
      <Dropdown
        label="Choose the bride's culture"
        options={country}
        value={country}
        onChange={() => {
          console.log("Brides clicked");
        }}
      />
      <br />
      <Dropdown
        label="Choose the groom's culture"
        options={country}
        value={country}
        onChange={() => {
          console.log("Groom clicked");
        }}
      />
      <br />
      <button type="submit" onClick="">
        Generate
      </button>
      <Card category="Food" title="Hummus" description="Nom Nom" img="" />
      <Card />
      <Card />
    </div>
  );
};

export default Ceremony;
