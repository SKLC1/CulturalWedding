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
      const { data } = await API.get(`/countries`);
      data.unshift({ value: "choose", label: "choose" });
      // console.log(data);
      setCountry(data);
    };
    updateStats();
  }, []);

  const handleClick = async () => {
    // console.log(bride);
    // console.log(groom);
    const { data } = await API.get(`/countries/${bride}/${groom}`);
    console.log(data);
    setRes(data);
  };
  const check = (category) => {
    if (res[0][category].length > 0) return 0;
    if (res[1][category].length > 0) return 1;
    return -1;
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
            {check("food") !== -1 ? (
              <Card
                category="Food"
                cards= {res[check("food")].food}
              />
            ) : (
              ""
            )}
            {check("outfit") !== -1 ? (
              <Card
                category="Outfit"
                cards= {res[check("outfit")].outfit}
              />
            ) : (
              ""
            )}
            {check("tradition") !== -1 ? (
              <Card
                category="Tradition"
                cards= {res[check("tradition")].tradition}
              />
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Ceremony;
