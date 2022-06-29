const mongoose = require("mongoose");
const dotenv = require("dotenv");
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
    }
  },
  {
    autoIndex: true,
  }
);
