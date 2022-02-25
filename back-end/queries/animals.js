const db = require("../db/config.js");

const fetchAnimals = async () => {
  try {
    const animals = await db.any("SELECT * FROM  animals ORDER BY name ASC");
    return animals;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchAnimals,
};
