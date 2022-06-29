const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  let error = false;
  if (!user) error = true;
  const match = await bcrypt.compare(password, user.password);
  if (!match) error = true;
  if (error) throw new Error("failed to login");

  return user;
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const User = mongoose.model("users", userSchema);

module.exports = User;
