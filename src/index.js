const { error } = require("console");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const knex = require("./database.js");
const port = 3000;
app.use(express.json());
app.use(cors());


app.listen(port, (err) => {
  if (!err) {
    console.log("running on port " + port);
  } else {
    console.error(err);
  }
});
