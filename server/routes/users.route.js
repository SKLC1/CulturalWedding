const { Router } = require("express");
const User = require("../models/user/user.model.js");

const users = Router();

users.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

//   app.post("/products/login", async (req, res) => {
//     try {
//       const product = await Product.findByCredentials(
//         req.body.name,
//         req.body.password
//       );
//       const token = await product.generateToken();
//       res.status(200).send({ product, token });
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   });

//   app.post("/products/logout", auth, async (req, res) => {
//     try {
//       req.product.tokens = req.product.tokens.filter((token) => {
//         return token.token !== req.token;
//       });
//       await req.product.save();
//       res.send();
//     } catch (e) {
//       res.status(500).send();
//     }
//   });

//   app.post("/products/logoutAll", auth, async (req, res) => {
//     try {
//       req.product.tokens = [];
//       await req.product.save();
//       res.send();
//     } catch (e) {
//       res.status(500).send();
//     }
//   });

module.exports = users;
