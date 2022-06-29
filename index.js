require("./server/db/mongoose.js");
const express = require("express");
const cors = require("cors");
const countriesRouter = require("./server/routes/countries.route.js");
const usersRouter = require("./server/routes/users.route.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/countries", countriesRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log("SERVER IS UP AND RUNNING ON PORT " + PORT);
});
