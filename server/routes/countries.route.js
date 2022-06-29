const { Router } = require("express");

const countries = Router();

const fakeData = [
  {
    name: "Israel",
    tradition: {
      description: "We love to get marry in the beach",
      title: "fake",
      imgURL: "",
    },
    food: { description: "We love Humus", title: "Humus", imgURL: "" },
    outfit: {
      description: "We love to dress casually",
      title: "fake",
      imgURL: "",
    },
  },
  {
    name: "Canada",
    tradition: {
      description:
        "At French-Canadian ceremonies, the couple's older, unmarried siblings traditionally perform a dance, all wearing wacky, brightly colored socks. As they dance, guests throw money at them which is then collected and presented to the newlyweds.",
      title: "Money Dance",
      imgURL:
        "https://www.brides.com/thmb/E-VPJEnNIppBc8HrKcnm00CcLaU=/715x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brides.com-35-335c5ad693134cb491a5203ae3bc40ce.jpg",
    },
    food: {
      description:
        "Canada’s popular poutine consists of fries and cheese curds, topped with a thick brown gravy. It was first served in the 1950s in rural snack bars in Quebec but now can be found nearly everywhere. It has become a symbol of Québécois culture.",
      title: "Poutine",
      imgURL:
        "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/08poutineUMOE_0.jpg",
    },
    outfit: {
      description: "We love to dress casually",
      title: "fake",
      imgURL: "",
    },
  },
];

countries.get("/", (req, res) => {
  try {
    const list = fakeData.map((country) => country.name);
    res.send(list);
  } catch (e) {
    res.status(500).send({ Error: e.message });
  }
});

countries.get("/:country", (req, res) => {
  try {
    const country = fakeData.filter(
      (country) => country.name === req.params.country
    );
    if (country.length === 0)
      throw new Error("there is no " + req.params.country + " in dataBase");
    res.send(country[0]);
  } catch (e) {
    res.status(500).send({ Error: e.message });
  }
});

module.exports = countries;
