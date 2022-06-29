const mongoose = require("mongoose");

const countriesSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  food: [
    {
      title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      imgURL: {
        type: String,
        require: true,
      },
    },
  ],
  tradition: [
    {
      title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      imgURL: {
        type: String,
        require: true,
      },
    },
  ],
  outfit: [
    {
      title: {
        type: String,
        require: true,
      },
      description: {
        type: String,
        require: true,
      },
      imgURL: {
        type: String,
        require: true,
      },
    },
  ],
});

const Country = mongoose.model("countries", countriesSchema);

module.exports = Country;
