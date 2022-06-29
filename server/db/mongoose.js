const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Country = require("../models/countries/countries.model");
dotenv.config();
const connection = process.env.CONNECTION_URI;
// console.log(connection);

mongoose.connect(
  connection,
  (error, mongoConnectionInstance) => {
    if (error) throw Error("Mongoose Connection!!, Error: " + error);
    if (!process.env.NODE_ENV) {
      const { host, port, name } = mongoConnectionInstance;
      //   console.log(mongoConnectionInstance);
      console.log({ host, port, name });
      //   const JData = fs.readFileSync("data.json").toString();
      //   const data = JSON.parse(JData);
      //   const send = async () => {
      //     const data1 = await Country.insertMany(data);
      //     console.log(data1);
      //   };
      //   send();
    }
  },
  {
    autoIndex: true,
  }
);
