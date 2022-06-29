const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minLength: 8,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
  uploads: [{ type: mongoose.Schema.Types.ObjectId }],
});

userSchema.methods.generateToken = async function () {
  const token = jwt.sign({ id: this._id.toString() }, "secret string");
  this.tokens = this.tokens.concat({ token });
  await this.save();
  return token;
};

module.exports = userSchema;
