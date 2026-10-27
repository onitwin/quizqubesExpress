const express = require("express");
const sequelize = require("./db");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.json());

// Test DB Connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.error("Unable to connect to the database:", error));

app.get("/", (req, res) => {
  res.send("Hello World from Express! (Hey, this works!)");
});

app.get("/howdy", (req, res) => {
  res.send("Responding with howdy");
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
