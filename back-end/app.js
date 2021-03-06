const express = require("express");
const app = express();
const cors = require("cors");
const animalsController = require("./controller/animals");

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://agitated-visvesvaraya-323d67.netlify.app",
  ],
  credentials: true,
};

app.use(express.json()); // returns middleware that only parses JSON
app.use(cors(corsOptions));

app.use("/animals", animalsController);

app.get("/", (request, response) => {
  response.send("Welcome to the zoo database");
});

app.get("*", (request, response) => {
  response.status(404).send("Sorry, Page Not Found");
});
module.exports = app;
