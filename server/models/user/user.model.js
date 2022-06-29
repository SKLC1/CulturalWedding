const mongoose = require("mongoose");
const userSchema = require("./user.schema.js");

const User = mongoose.model("users", userSchema);

module.exports = User;
