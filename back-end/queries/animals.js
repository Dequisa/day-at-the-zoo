const db = require("../db/config.js");

const fetchAnimals = async () => {
  try {
    const animals = await db.any("SELECT * FROM  animals ORDER BY name ASC");
    return animals;
  } catch (err) {
    console.log(err);
  }
};

const fetchAnimalById = async (animals_id) => {
  try {
    const animal = await db.one(
      "SELECT * FROM animals WHERE animals_id=$1",
      animals_id
    );
    return animal;
  } catch (err) {
    return err;
  }
};

module.exports = {
  fetchAnimals,
  fetchAnimalById,
};
