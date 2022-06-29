const { Router } = require("express");
const Country = require("../models/countries/countries.model");

const countries = Router();

// const fakeData = [
//   {
//     name: "Israel",
//     tradition: [
//       {
//         description: "We love to get marry in the beach",
//         title: "fake",
//         imgURL: "",
//       },
//     ],
//     food: [{ description: "We love Humus", title: "Humus", imgURL: "" }],
//     outfit: [
//       {
//         description: "We love to dress casually",
//         title: "fake",
//         imgURL: "",
//       },
//     ],
//   },
//   {
//     name: "Canada",
//     tradition: [
//       {
//         description:
//           "At French-Canadian ceremonies, the couple's older, unmarried siblings traditionally perform a dance, all wearing wacky, brightly colored socks. As they dance, guests throw money at them which is then collected and presented to the newlyweds.",
//         title: "Money Dance",
//         imgURL:
//           "https://www.brides.com/thmb/E-VPJEnNIppBc8HrKcnm00CcLaU=/715x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brides.com-35-335c5ad693134cb491a5203ae3bc40ce.jpg",
//       },
//     ],
//     food: [
//       {
//         description:
//           "Canada’s popular poutine consists of fries and cheese curds, topped with a thick brown gravy. It was first served in the 1950s in rural snack bars in Quebec but now can be found nearly everywhere. It has become a symbol of Québécois culture.",
//         title: "Poutine",
//         imgURL:
//           "https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/08poutineUMOE_0.jpg",
//       },
//     ],
//     outfit: [
//       {
//         description: "We love to dress casually",
//         title: "fake",
//         imgURL: "",
//       },
//     ],
//   },
// ];

countries.get("/", async (req, res) => {
  try {
    const countries = await Country.find();
    const list = [];
    countries.map((country) =>
      list.push({ label: country.name, value: country.name })
    );
    res.send(list);
  } catch (e) {
    res.status(500).send({ Error: e.message });
  }
});

countries.get("/:country1/:country2", async (req, res) => {
  try {
    const countries = await Country.find();
    const chosen = countries.filter(
      (country) =>
        country.name.toLowerCase() === req.params.country1.toLowerCase() ||
        country.name.toLowerCase() === req.params.country2.toLowerCase()
    );
    if (chosen.length < 2)
      throw new Error(
        "there is no " +
          req.params.country1 +
          " or " +
          req.params.country2 +
          " in dataBase"
      );
    res.send(chosen);
  } catch (e) {
    res.status(500).send({ Error: e.message });
  }
});

module.exports = countries;
