import Main from "../Components/Main";
import Secondary from "../Components/Secondary";
import { useState, useEffect } from "react";
import axios from "axios";

function MainPage() {
  const [animals, setAnimals] = useState("");

  useEffect(() => {
    const accessAnimals = async () => {
      try {
        // const res = await axios.get("https://zoo-planner.herokuapp.com/animals");
        const res = await axios.get("http://localhost:3001/animals");
        setAnimals(res.data);
      } catch (err) {
        console.log("Error Returned from acessAnimals Request: ", err);
      }
    };
    accessAnimals();
  }, []);

  return (
    <div className="MainPage">
      {animals &&
        animals.map((animal) => {
          return (
            <Main
              key={animal.animal_id}
              name={animal.name}
              location={animal.location}
              img={animal.img}
            />
          );
        })}
    </div>
  );
}

export default MainPage;
