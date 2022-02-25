const animals = require("express").Router();
const { fetchAnimals, fetchAnimalById } = require("../queries/animals");

animals.get("/", async (request, response) => {
  const animals = await fetchAnimals();
  response.json(animals);
});

animals.get("/:animals_id", async (request, response) => {
  const { animals_id } = request.params;
  try {
    const fetchAnimal = await fetchAnimalById(animals_id);
    response.json(fetchAnimal);
  } catch (err) {
    response.status(404).json({ error: "Resource Not Found", err });
  }
});

module.exports = animals;
