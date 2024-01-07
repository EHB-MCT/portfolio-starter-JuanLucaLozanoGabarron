const { error } = require("console");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const knexfile = require("./db/knexfile.js");
const knex = require("knex")(knexfile.development);
const checkShoeInput = require("./__test__/helpers/checkShoe.js");
app.use(express.json());
app.use(cors());

app.get("/shoes", async (req, res) => {
  const shoes = await knex("shoes").select();
  res.status(200).json(shoes);
});

app.get("/shoes/:model", async (req, res) => {
  const shoeModel = req.params.model;
  const shoes = await knex("shoes").where("model", shoeModel);
  if (shoes.length !== 0) {
    return res.status(200).json(shoes);
  }
  return res.status(404).json({ message: "Shoe not found" });
});

app.post("/shoes", async (req, res) => {
  if (!checkShoeInput(req.body)) {
    return res.status(400).send({ error: "Fill the missings fields" });
  }
  const shoeModel = req.body.model;
  const shoes = await knex("shoes").where("model", shoeModel);
  if (shoes.length !== 0) {
    return res.status(400).json({ error: "Shoe already exists" });
  }

  const newShoes = {
    brand: req.body.brand,
    model: req.body.model,
    img: req.body.img,
  };

  await knex("shoes").insert(newShoes);
  res.status(200).send({ message: "Shoes posted successfully" });
});

app.delete("/shoes/:model", async (req, res) => {
  const shoeModel = req.params.model;
  const remove = await knex("shoes").where("model", shoeModel).del();
  if (remove) {
    return res.status(200).json({ message: "Shoe has been deleted" });
  } else {
    return res.status(404).json({ message: "Shoe not found" });
  }
});

app.put("/shoes/:model", async (req, res) => {
  if (!req.body.model) {
    return res.status(400).send("Please fill the missing fields");
  }
  const shoeModel = req.params.model;

  const shoes = await knex("shoes").where("model", shoeModel);
  if (shoes.length == 0) {
    return res.status(404).json({ message: "Shoe not found" });
  }
  await knex("shoes")
    .where("model", shoeModel)
    .update({ model: req.body.model });

  res.status(200).send({ message: "Shoe model updated successfully" });
});

module.exports = app;
