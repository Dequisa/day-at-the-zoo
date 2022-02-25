const animals = require("express").Router();
const { fetchAnimals } = require("../queries/animals");

animals.get("/", async (request, response) => {
  const animals = await fetchAnimals();
  response.json(animals);
});

module.exports = animals;
