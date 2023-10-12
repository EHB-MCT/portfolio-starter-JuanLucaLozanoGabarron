const { error } = require("console");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const knex = require("./database.js");
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/shoes", async (req, res) => {
  const shoes = await knex("shoes").select();
  res.json(shoes);
});

app.post("/shoes", async (req, res) => {
  if (!req.body.brand || !req.body.model) {
    return res.status(400).send({ error: "Fill the missings fields" });
  }

  const newShoes = {
    brand: req.body.brand,
    model: req.body.model,
  };

  await knex("shoes").insert(newShoes);
  res.status(200).send("Shoes posted successfully");
});

app.delete("/shoes/:id", async (req, res) => {
  const shoesId = req.params.id;
  const remove = await knex("shoes").where("id", shoesId).del();
  if (remove) {
    return res.send("Shoes had been deleted");
  } else {
    return res.send("Shoes is not found");
  }
});

app.put("/shoes/:id", async (req, res) => {
  if (!req.body.model) {
    return res.status(400).send("Please fill the missing fields");
  }
  const shoesId = req.params.id;
  await knex("shoes").where("id", shoesId).update({ model: req.body.model });

  res.status(200).send("Shoes updated successfully");
});

app.listen(port, (err) => {
  if (!err) {
    console.log("running on port " + port);
  } else {
    console.error(err);
  }
});
