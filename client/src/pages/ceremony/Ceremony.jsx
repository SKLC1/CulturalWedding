import React, { useState, useEffect } from "react";
import axios from "axios";
// import CultureCard from "./components/CultureCard";
import "./ceremony.css";
import Dropdown from "../../globalComponents/reusable/dropdown/Dropdown";
import Card from "../../globalComponents/reusable/dropdown/Card";
import { API } from "../../api/api";

const Ceremony = () => {
  const [country, setCountry] = useState([]);
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [res, setRes] = useState("");

  useEffect(() => {
    const updateStats = async () => {
      const { data } = await API.get(
        `/countries`
      );
      data.unshift({ value: "choose", label: "choose" });
      // console.log(data);
      setCountry(data);
    };
    updateStats();
  }, []);

  const handleClick = async () => {
    // console.log(bride);
    // console.log(groom);
    const { data } = await API.get(
      `/countries/${bride}/${groom}`
    );
    console.log(data);
    setRes(data);
  };
  const check = (category) => {
    if(res[0][category].length > 0) return 0;
    if(res[1][category].length > 0) return 1;
    return -1;
  }
  return (
    <div>
      <Dropdown
        className="dropdown-ceremony"
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
      <div className="card-container">
        {res ? (
          <>
            {check("food") !== -1? <Card
              category="Food"
              title={res[check("food")].food[0].title}
              img={res[check("food")].food[0].imgURL}
              description={res[check("food")].food[0].description}
            />: ""}
            {check("outfit") !== -1?<Card
              category="Outfit"
              title={res[check("outfit")].outfit[0].title}
              img={res[check("outfit")].outfit[0].imgURL}
              description={res[check("outfit")].outfit[0].description}
            />: ""}
            {check("tradition") !== -1?<Card
              category="Tradition"
              title={res[check("tradition")].tradition[0].title}
              img={res[check("tradition")].tradition[0].imgURL}
              description={res[check("tradition")].tradition[0].description}
            />: ""}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Ceremony;
