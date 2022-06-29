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
  const [res, setRes] = useState("");

  useEffect(() => {
    const updateStats = async () => {
      const { data } = await axios.get(
        `https://mixed-wedding.herokuapp.com/countries`
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
    const { data } = await axios.get(
      `https://mixed-wedding.herokuapp.com/countries/${bride}/${groom}`
    );
    console.log(data);
    setRes(data);
  };
  return (
    <div>
      <h1 className="ceremony-title">Let's Mix Things Up</h1>
      <div className="dropdown-wraper">
        <div className="dropdown-ceremony">
          <Dropdown
            label="Bride's Culture"
            options={country}
            value={bride}
            onChange={(val) => {
              setBride(val);
            }}
          />
        </div>
        <br />
        <button className="dropdown-button" type="submit" onClick={handleClick}>
          Generate
          {/* <FontAwesomeIcon icon="fa-solid fa-code-merge" /> */}
        </button>
        <br />

        <div className="dropdown-ceremony">
          <Dropdown
            label="Groom's Culture"
            options={country}
            value={groom}
            onChange={(val) => {
              setGroom(val);
            }}
          />
        </div>
        <br />
      </div>
      <div className="card-container">
        {res ? (
          <>
            <Card
              category="Food"
              title={res[1].food[0].title}
              img={res[1].food[0].imgURL}
              description={res[1].food[0].description}
            />
            <Card
              category="Outfit"
              title={res[0].outfit[0].title}
              img={res[0].outfit[0].imgURL}
              description={res[0].outfit[0].description}
            />
            <Card
              category="Tradition"
              title={res[1].tradition[0].title}
              img={res[1].tradition[0].imgURL}
              description={res[1].tradition[0].description}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Ceremony;
